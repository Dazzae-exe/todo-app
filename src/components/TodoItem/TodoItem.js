import "../../assets/TodoItem.css";

function TodoItem(props) {

  return (
    <li className="todo-item">
      <span className="TodoItem-span--completed">
        {props.completed === true ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
        ) : ""}
      </span>
      <p className={props.completed === true ? "TodoItem-p--linethrough" : "TodoItem-p"} onClick={props.onComplete}>{props.text}</p>
      <span className="TodoItem-span--close" onClick={props.onDelete}>X</span>
    </li>
  );
}

export default TodoItem;
