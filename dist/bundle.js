"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var App;
(function (App) {
    class Component {
        constructor(templateId, hostElementId, insertAtStart, newElementId) {
            this.templateElment = document.getElementById(templateId);
            this.hostElement = document.getElementById(hostElementId);
            const importedNode = document.importNode(this.templateElment.content, true);
            this.element = importedNode.firstElementChild;
            if (newElementId) {
                this.element.id = newElementId;
            }
            this.attach(insertAtStart);
        }
        attach(insertAtBeginnig) {
            this.hostElement.insertAdjacentElement(insertAtBeginnig ? "afterbegin" : "beforeend", this.element);
        }
    }
    App.Component = Component;
})(App || (App = {}));
var App;
(function (App) {
    function bind(_, _2, description) {
        const origin = description.value;
        const adjDescriptor = {
            configurable: true,
            enumerable: false,
            get() {
                return origin.bind(this);
            },
        };
        return adjDescriptor;
    }
    App.bind = bind;
})(App || (App = {}));
var App;
(function (App) {
    function validate(validatableInput) {
        let isValid = true;
        if (validatableInput.required) {
            isValid = isValid && validatableInput.value.toString().trim().length !== 0;
        }
        if (validatableInput.minLength != null &&
            typeof validatableInput.value === "string") {
            isValid =
                isValid && validatableInput.value.length >= validatableInput.minLength;
        }
        if (validatableInput.maxLength != null &&
            typeof validatableInput.value === "string") {
            isValid =
                isValid && validatableInput.value.length <= validatableInput.maxLength;
        }
        if (validatableInput.min != null &&
            typeof validatableInput.value === "string") {
            isValid = isValid && validatableInput.value.length >= validatableInput.min;
        }
        if (validatableInput.max != null &&
            typeof validatableInput.value === "string") {
            isValid = isValid && validatableInput.value.length <= validatableInput.max;
        }
        return isValid;
    }
    App.validate = validate;
})(App || (App = {}));
var App;
(function (App) {
    class State {
        constructor() {
            this.listeners = [];
        }
        addListener(listenerFn) {
            this.listeners.push(listenerFn);
        }
    }
    class ProjectState extends State {
        constructor() {
            super();
            this.projects = [];
        }
        static getInstance() {
            if (this.instance) {
                return this.instance;
            }
            this.instance = new ProjectState();
            return this.instance;
        }
        addProject(title, description, manday) {
            const newProject = new App.Project(Math.random().toString(), title, description, manday, App.ProjectStatus.Active);
            this.projects.push(newProject);
            this.updateListers();
        }
        moveProject(projectId, newStatus) {
            const project = this.projects.find(prj => prj.id === projectId);
            if (project && project.status !== newStatus) {
                project.status = newStatus;
                this.updateListers();
            }
        }
        updateListers() {
            for (const listenerFn of this.listeners) {
                listenerFn(this.projects.slice());
            }
        }
    }
    App.ProjectState = ProjectState;
    App.projectState = ProjectState.getInstance();
})(App || (App = {}));
var App;
(function (App) {
    class ProjectInput extends App.Component {
        constructor() {
            super("project-input", "app", true, "user-input");
            this.titleInputElement = this.element.querySelector("#title");
            this.descriptionInputElement = this.element.querySelector("#description");
            this.mandayInputElement = this.element.querySelector("#manday");
            this.configure();
        }
        configure() {
            this.element.addEventListener("submit", this.submitHandler);
        }
        renderContent() { }
        gatherUserInput() {
            const enteredTitle = this.titleInputElement.value;
            const enteredDescription = this.descriptionInputElement.value;
            const enteredManday = this.mandayInputElement.value;
            const titleValidable = {
                value: enteredTitle,
                required: true,
            };
            const descriptionValidable = {
                value: enteredDescription,
                required: true,
                minLength: 1,
            };
            const mandayValidable = {
                value: enteredManday,
                required: true,
                min: 1,
                max: 1000,
            };
            if (!App.validate(titleValidable) ||
                !App.validate(descriptionValidable) ||
                !App.validate(mandayValidable)) {
                alert("入力値不正");
                return;
            }
            else {
                return [enteredTitle, enteredDescription, +enteredManday];
            }
        }
        clearInputs() {
            this.titleInputElement.value = "";
            this.descriptionInputElement.value = "";
            this.mandayInputElement.value = "";
        }
        submitHandler(event) {
            event.preventDefault();
            const userInput = this.gatherUserInput();
            if (Array.isArray(userInput)) {
                const [title, desc, manday] = userInput;
                App.projectState.addProject(title, desc, manday);
                this.clearInputs();
            }
        }
    }
    __decorate([
        App.bind
    ], ProjectInput.prototype, "submitHandler", null);
    App.ProjectInput = ProjectInput;
})(App || (App = {}));
var App;
(function (App) {
    let ProjectStatus;
    (function (ProjectStatus) {
        ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
        ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
    })(ProjectStatus = App.ProjectStatus || (App.ProjectStatus = {}));
    class Project {
        constructor(id, title, description, manday, status) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.manday = manday;
            this.status = status;
        }
    }
    App.Project = Project;
})(App || (App = {}));
var App;
(function (App) {
    class ProjectList extends App.Component {
        constructor(type) {
            super("project-list", "app", false, `${type}-projects`);
            this.type = type;
            this.assignProjects = [];
            this.configure();
            this.renderContent();
        }
        dragOverHandler(event) {
            if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
                event.preventDefault();
                const listEl = this.element.querySelector("ul");
                listEl.classList.add("droppable");
            }
        }
        dropHandler(event) {
            const prjId = event.dataTransfer.getData("text/plain");
            App.projectState.moveProject(prjId, this.type === "active" ? App.ProjectStatus.Active : App.ProjectStatus.Finished);
        }
        dragLeaveHandler(_) {
            const listEl = this.element.querySelector("ul");
            listEl.classList.remove("droppable");
        }
        configure() {
            this.element.addEventListener("dragover", this.dragOverHandler);
            this.element.addEventListener("drop", this.dropHandler);
            this.element.addEventListener("dragleave", this.dragLeaveHandler);
            App.projectState.addListener((projects) => {
                const relevantProjects = projects.filter((prj) => {
                    if (this.type === "active") {
                        return prj.status === App.ProjectStatus.Active;
                    }
                    return prj.status === App.ProjectStatus.Finished;
                });
                this.assignProjects = relevantProjects;
                this.renderProjects();
            });
        }
        renderContent() {
            const listId = `${this.type}-projects-list`;
            this.element.querySelector("ul").id = listId;
            this.element.querySelector("h2").textContent =
                this.type === "active" ? "実行中プロジェクト" : "完了プロジェクト";
        }
        renderProjects() {
            const listEl = document.getElementById(`${this.type}-projects-list`);
            listEl.innerHTML = "";
            for (const prjItem of this.assignProjects) {
                new App.ProjectItem(listEl.id, prjItem);
            }
        }
    }
    __decorate([
        App.bind
    ], ProjectList.prototype, "dragOverHandler", null);
    __decorate([
        App.bind
    ], ProjectList.prototype, "dropHandler", null);
    __decorate([
        App.bind
    ], ProjectList.prototype, "dragLeaveHandler", null);
    App.ProjectList = ProjectList;
})(App || (App = {}));
var App;
(function (App) {
    new App.ProjectInput();
    new App.ProjectList("active");
    new App.ProjectList("finished");
})(App || (App = {}));
var App;
(function (App) {
    class ProjectItem extends App.Component {
        constructor(hostId, project) {
            super("single-project", hostId, false, project.id);
            this.project = project;
            this.configure();
            this.renderContent();
        }
        get manday() {
            if (this.project.manday < 20) {
                return this.project.manday.toString() + "人日";
            }
            return (this.project.manday / 20).toString() + "人月";
        }
        dragStartHandler(event) {
            event.dataTransfer.setData('text/plain', this.project.id);
            event.dataTransfer.effectAllowed = 'move';
        }
        dragEndHanler(_) {
            console.log('Drag終了');
        }
        configure() {
            this.element.addEventListener('dragstart', this.dragStartHandler);
            this.element.addEventListener('dragend', this.dragEndHanler);
        }
        renderContent() {
            this.element.querySelector("h2").textContent = this.project.title;
            this.element.querySelector("h3").textContent = this.manday;
            this.element.querySelector("p").textContent = this.project.description;
        }
    }
    __decorate([
        App.bind
    ], ProjectItem.prototype, "dragStartHandler", null);
    __decorate([
        App.bind
    ], ProjectItem.prototype, "dragEndHanler", null);
    App.ProjectItem = ProjectItem;
})(App || (App = {}));
//# sourceMappingURL=bundle.js.map