import { useRef } from "react";

import './NewTodo.css'

type NewTodoProps = {
  onAddTodo: (todotext: string) => void
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textinputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enterText = textinputRef.current!.value;
    props.onAddTodo(enterText)
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo内容</label>
        <input type="text" id="todo-text" ref={textinputRef} />
      </div>
      <button type="submit">追加</button>
    </form>
  );
};

export default NewTodo;
