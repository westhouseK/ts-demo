// component class
export const something = ".....";

export default abstract class Component<
  T extends HTMLElement,
  U extends HTMLElement
> {
  templateElment: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    this.templateElment = document.getElementById(
      templateId
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId)! as T;

    const importedNode = document.importNode(this.templateElment.content, true);
    this.element = importedNode.firstElementChild as U;
    if (newElementId) {
      this.element.id = newElementId;
    }

    this.attach(insertAtStart);
  }

  abstract configure(): void;
  abstract renderContent(): void;

  protected attach(insertAtBeginnig: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginnig ? "afterbegin" : "beforeend",
      this.element
    );
  }
}
