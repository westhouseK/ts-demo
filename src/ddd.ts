// 仕様
// 商品名 10文字以内
// 値段 100〜10000円
// ステータス 一度完了にしたら、変更することができない

type Status = 'waiting' | 'complated'

// ドメイン層
class Item {
    private _id: number
    private _name: string
    private _price: number
    private _status: Status
    constructor(name: string, price: number) {
        this._id = Math.random()
        if (name.length >= 10) {
            throw new Error('商品名は10文字以内です')
        }
        if (price < 100 || price > 10000) {
            throw new Error('値段は100〜10000円です')
        }
        this._name = name
        this._price = price
        this._status = 'waiting'
    }
    public name() {
        return this._name
    }
    public status() {
        return this._status
    }
    complate() {
        this._status = 'complated'
    }
}
class ItemDomainService {
    notChangeStatus(item: Item) {
        if (item.status() === 'complated') {
            throw new Error('一度完了にしたら、変更することができません')
        }
    }
}
interface IItemRepository {
    create(item: Item): void
    update(item: Item): void
}


// アプリケーション(ユースケース)層
class CreateItemUsecase {
    constructor(private repo: IItemRepository) { }
    execute(name: string, price: number) {
        const item = new Item(name, price)
        this.repo.update(item)
    }
}
class UpdateItemUsecase {
    constructor(private repo: IItemRepository, private itemDomainService: ItemDomainService) { }
    execute(id: number, name: string, price: number) {
        // FIXME: 本当はデータベースから参照
        const item = new Item(name, price)
        this.itemDomainService.notChangeStatus(item)
        this.repo.create(item)
    }
}

// プレゼンテーション層
class CreateItemResolver {
    constructor(private createItemUsecase: CreateItemUsecase) { }
    createItem(name: string, price: number) {
        // TODO: 本当はInputを定義

        const usecase = this.createItemUsecase.execute(name, price)

        // TODO: 本当はOutputを定義

    }
}
class UpdateItemResolver {
    constructor(private updateItemUsecase: UpdateItemUsecase) { }
    updateItem(id: number, name: string, price: number) {
        // TODO: 本当はInputを定義

        const usecase = this.updateItemUsecase.execute(id, name, price)

        // TODO: 本当はOutputを定義

    }
}

// インフラ層
class ItemRepository implements IItemRepository {
    create(item: Item) {
        console.log(`データベースに${item.name()}を登録`)
    }
    update(item: Item) {
        console.log(`データベースに${item.name()}を更新`)
    }
}

// 新規作成
const createItemResolver = new CreateItemResolver(new CreateItemUsecase(new ItemRepository))
// 正常系
createItemResolver.createItem('coffee1', 500)
// 異常系
try {
    createItemResolver.createItem('coffeecoffee123', 500)
} catch (e: any) {
    console.log(`Error: ${e.message}`)
}
try {
    createItemResolver.createItem('coffee100', 100000)
} catch (e: any) {
    console.log(`Error: ${e.message}`)
}

// 更新
const updateItemResolver = new UpdateItemResolver(new UpdateItemUsecase(new ItemRepository, new ItemDomainService()))
// 正常系
updateItemResolver.updateItem(1, 'coffee123', 1000)




// 参考
// https://zenn.dev/ayumukob/articles/ff183004d09ede#%E4%B8%80%E8%88%AC%E7%9A%84%E3%81%AA%E5%B1%A4%E3%81%AE%E8%B2%AC%E5%8B%99
// https://blog.spacemarket.com/code/clean-architecture-node/