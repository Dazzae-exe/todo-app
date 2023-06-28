import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: setItem,
    loading,
    error,
  } = useLocalStorage("todos", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const handleModal = (boolean) => {
    setOpenModal(boolean);
  };

  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    return todo.text.includes(searchValue);
  });

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setItem(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIdx = newTodos.findIndex((todo) => todo.text === text);
    if (newTodos[todoIdx].completed !== true) {
      newTodos[todoIdx].completed = true;
    } else {
      newTodos[todoIdx].completed = !true;
    }
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setItem(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIdx = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIdx, 1);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setItem(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setItem,
        loading,
        error,
        searchValue,
        setSearchValue,
        completedTodos,
        totalTodos,
        completeTodo,
        deleteTodo,
        openModal,
        handleModal,
        setOpenModal,
        addTodo,
        searchedTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
