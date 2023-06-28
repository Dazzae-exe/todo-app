import '../../assets/TodoList.css'

function TodoList(props) {
    return (
        <>
            <h2>Tus tareas</h2>
            <ul className="todo-list">
                {props.children}      
            </ul>
        </>
    )
}

export default TodoList;