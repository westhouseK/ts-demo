// Project State Management
class ProjectState {
  private listeners: any[] = []
  private projects: any[] = []
  private static instance: ProjectState

  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance
    }
    this.instance = new ProjectState()
    return this.instance
  }

  addProject(title: string, description: string, manday: number) {
    const newProject = {
      id: Math.random().toString(),
      title: title,
      description: description,
      manday: manday
    }
    this.projects.push(newProject)
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice())
    }
  }

  addListener(listenerFn: Function) {
    this.listeners.push(listenerFn)
  }
}

const projectState = ProjectState.getInstance()

// Validation
interface Validatable {
  value: string | number
  required: boolean
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
}

function validate(validatableInput: Validatable) {
  let isValid = true
  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0
  }
  if (validatableInput.minLength != null && typeof validatableInput.value === 'string') {
    isValid = isValid && validatableInput.value.length >= validatableInput.minLength
  }
  if (validatableInput.maxLength != null && typeof validatableInput.value === 'string') {
    isValid = isValid && validatableInput.value.length <= validatableInput.maxLength
  }
  if (validatableInput.min != null && typeof validatableInput.value === 'string') {
    isValid = isValid && validatableInput.value.length >= validatableInput.min
  }
  if (validatableInput.max != null && typeof validatableInput.value === 'string') {
    isValid = isValid && validatableInput.value.length <= validatableInput.max
  }
  return isValid
}

// Decorator
function bind(_: any, _2: string, description: PropertyDescriptor) {
  const origin = description.value
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      return origin.bind(this)
    }
  }
  return adjDescriptor
}

// ProjectList class
class ProjectList {
  templateElment: HTMLTemplateElement
  hostElement: HTMLDivElement
  element: HTMLElement
  assignProjects: any[]

  constructor(private type: 'active' | 'finished') {
    this.templateElment = document.getElementById('project-list')! as HTMLTemplateElement
    this.hostElement = document.getElementById('app')! as HTMLDivElement
    this.assignProjects = []

    const importedNode = document.importNode(this.templateElment.content, true)
    this.element = importedNode.firstElementChild as HTMLElement
    this.element.id = `${this.type}-projects`

    projectState.addListener((projects: any) => {
      this.assignProjects = projects
      this.renderProjects()
    })

    this.attach()
    this.renderContent()
  }

  private renderProjects() {
    const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement
    for (const prjItem of this.assignProjects) {
      const listItem = document.createElement('li')
      listItem.textContent = prjItem.title
      listEl.appendChild(listItem)
    }
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`
    this.element.querySelector('ul')!.id = listId
    this.element.querySelector('h2')!.textContent = this.type === 'active' ? '実行中プロジェクト' : '完了プロジェクト'
  }

  private attach() {
    this.hostElement.insertAdjacentElement('beforeend', this.element)
  }
}


// ProjectInput class
class ProjectInput {
  templateElment: HTMLTemplateElement
  hostElement: HTMLDivElement
  element: HTMLFormElement
  titleInputElement: HTMLInputElement
  descriptionInputElement: HTMLInputElement
  mandayInputElement: HTMLInputElement

  constructor() {
    this.templateElment = document.getElementById('project-input')! as HTMLTemplateElement
    this.hostElement = document.getElementById('app')! as HTMLDivElement

    const importedNode = document.importNode(this.templateElment.content, true)
    this.element = importedNode.firstElementChild as HTMLFormElement
    this.element.id = 'user-input'

    this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement
    this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement
    this.mandayInputElement = this.element.querySelector('#manday') as HTMLInputElement

    this.configure()
    this.attach()
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value
    const enteredDescription = this.descriptionInputElement.value
    const enteredManday = this.mandayInputElement.value

    const titleValidable: Validatable = {
      value: enteredTitle,
      required: true 
    }
    const descriptionValidable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5
    }
    const mandayValidable: Validatable = {
      value: enteredManday,
      required: true,
      min: 1,
      max: 1000
    }

    if (!validate(titleValidable) || !validate(descriptionValidable) || !validate(mandayValidable)) {
      alert('入力値不正')
      return
    } else {
      return [enteredTitle, enteredDescription, +enteredManday]
    }
  }

  private clearInputs() {
    this.titleInputElement.value = ''
    this.descriptionInputElement.value = ''
    this.mandayInputElement.value = ''
  }

  @bind
  private submitHandler(event: Event) {
    event.preventDefault()
    const userInput = this.gatherUserInput()
    if (Array.isArray(userInput)) {
      const [title, desc, manday] = userInput
      projectState.addProject(title, desc, manday)
      this.clearInputs()
    }
  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler)
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element)
  }
}

const prjInput = new ProjectInput()
const activeProjectList = new ProjectList('active')
const finishedProjectList = new ProjectList('finished')