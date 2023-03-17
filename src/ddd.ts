// 参照→テイクアウトの時、軽減税率 
// 登録→商品の名前は10文字以内

// ドメイン層
class Item {
    private _id: number
    private _name: string
    private _price: number
    private isTakeout: boolean
    constructor(name: string, price: number, isTakeout: boolean) {
        this._id = Math.random()
        if (name.length >= 10) {
            throw new Error('名前は10文字以内です')
        }
        this._name = name
        this._price = price
        this.isTakeout = isTakeout
    }

    public get name() : string {
        return this._name
    }

    getTaxPrice = () => {
        return this.isTakeout ? this._price * 1.08 : this._price * 1.1
    }
}
interface IItemRepository {
    findById(id: number) :void
    save(item: Item): void
}

// アプリケーション(ユースケース)層
class CreateItemUsecase {
    constructor(private repo: IItemRepository) {}
    execute = (name: string, price: number, isTakeout: boolean) => {
        const item = new Item(name, price, isTakeout)
        this.repo.save(item)
    }
}

// プレゼンテーション層
class CreateItemResolver {
    constructor(private createItemUsecase: CreateItemUsecase) {}
    createItem(name: string, price: number, isTakeout: boolean) {
        // TODO: 本当はInputを定義

        const usecase = this.createItemUsecase.execute(name, price, isTakeout)

        // TODO: 本当はOutputを定義

    }
}

// インフラ層
class ItemRepository implements IItemRepository{
    findById(id: number): void {
        console.log(`データベースから${id}で検索`)
    }
    save(item: Item): void {
        console.log(`データベースに${item.name}を保存`)
    }
}

const resolver = new CreateItemResolver(new CreateItemUsecase(new ItemRepository))
// 正常系
resolver.createItem('coffee1', 500, true)
// 異常系
try {
    resolver.createItem('coffeecoffee123', 500, false)
} catch (e: any) {
    console.log(`Error: ${e.message}`)
}



// 参考
// https://zenn.dev/ayumukob/articles/ff183004d09ede#%E4%B8%80%E8%88%AC%E7%9A%84%E3%81%AA%E5%B1%A4%E3%81%AE%E8%B2%AC%E5%8B%99
// https://blog.spacemarket.com/code/clean-architecture-node/