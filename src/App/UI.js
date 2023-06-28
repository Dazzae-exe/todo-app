import React from "react";
import TodoSearch from "../components/TodoSearch/TodoSearch";
import TodoList from "../components/TodoList/TodoList";
import TodoCounter from "../components/TodoCounter/TodoCounter";
import Modal from "../components/Modal/index";
import TodoForm from "../components/TodoForm/TodoForm";
import TodoItem from "../components/TodoItem/TodoItem";

function UI({
  loading,
  error,
  completeTodo,
  deleteTodo,
  searchValue,
  setSearchValue,
  completedTodos,
  totalTodos,
  openModal,
  handleModal,
  addTodo,
  searchedTodos,
}) {
  return (
    <>
      <TodoSearch
        state={searchValue}
        setState={setSearchValue}
        handleModal={handleModal}
      />

      <TodoList>
        {loading ? "Loading..." : ""}
        {error ? "Error" : ""}
        {searchedTodos.length <= 0 ? (
          <p>Añade un TODO</p>
        ) : (
          searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))
        )}
      </TodoList>

      <TodoCounter completed={completedTodos} total={totalTodos} />

      {openModal ? (
        <Modal>
          <TodoForm setOpenModal={handleModal} addTodo={addTodo} />
        </Modal>
      ) : (
        ""
      )}
    </>
  );
}

export { UI };
