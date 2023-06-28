function CreateTodoButton({ handleModal }) {
  return (
    <button className="btn-todo" type="button" onClick={() => handleModal(true)}>+</button>
  )
}

export default CreateTodoButton;