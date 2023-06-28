import React from "react";
import "../../assets/TodoSearch.css";
import CreateTodoButton from "../CreateTodoButton/CreateTodoButton";

function TodoSearch(props) {

  const changeSearchValue = (evt) => {
    props.setState(evt.target.value);

    return props.searchedTodos;
  }

  return (
    <form className="todoSearch-container">
      <input
        name="todoSearch"
        placeholder="Cortar cebolla"
        type="text"
        value={props.state}
        onChange={changeSearchValue}
      />
      <CreateTodoButton handleModal={props.handleModal} />
    </form>
  );
}

export default TodoSearch;
