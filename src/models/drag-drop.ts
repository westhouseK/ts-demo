// Drag Drop
export interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHanler(event: DragEvent): void;
}

export interface DropTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}
