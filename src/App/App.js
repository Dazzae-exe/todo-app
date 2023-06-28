import { TodoContext, TodoProvider } from "../context";
import { UI } from "./UI";

function App() {
  return (
    <TodoProvider>
      <TodoContext.Consumer>
        {({
          loading,
          error,
          setItem,
          completeTodo,
          deleteTodo,
          searchValue,
          setSearchValue,
          completedTodos,
          totalTodos,
          openModal,
          handleModal,
          addTodo,
          searchedTodos
        }) => (
          <UI
            loading={loading}
            error={error}
            setItem={setItem}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            completedTodos={completedTodos}
            totalTodos={totalTodos}
            openModal={openModal}
            handleModal={handleModal}
            addTodo={addTodo}
            searchedTodos={searchedTodos}
          />
        )}
      </TodoContext.Consumer>
    </TodoProvider>
  );
}

export default App;
