export const something = ".....";
export default class Component {
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
//# sourceMappingURL=components.js.map