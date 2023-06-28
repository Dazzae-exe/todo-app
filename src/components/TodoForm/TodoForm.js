import React from "react";
import "../../assets/TodoForm.css";

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewtodoValue] = React.useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onClose = (evt) => {
    evt.preventDefault();
    setOpenModal(false);
  };

  const onChange = (evt) => {
    setNewtodoValue(evt.target.value);
    console.log(newTodoValue);
  };

  return (
    <form className="TodoForm" onSubmit={(evt) => onSubmit(evt)}>
      <label htmlFor="newTodo">
        Escribe tu nuevo <strong>todo</strong>
      </label>
      <textarea
        name="newTodo"
        placeholder="Escribir sobre un libro..."
        onChange={(evt) => onChange(evt)}
      ></textarea>
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button--cancel"
          onClick={(evt) => onClose(evt)}
        >
          Close
        </button>
        <button type="submit" className="TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
