import BulkActionPanel from "./BulkActionPanel";
import FilterPanel from "./FilterPanel";
import Analytics from "./Analytics";
import CreateTodoForm from "./CreateTodoForm";
import useTodoAppState from "../hooks/useTodoAppState";
import useFilterState from "../hooks/useFilterState";
import useEditWindow from "../hooks/useEditWindow";
import React, { useCallback, useMemo, useState } from "react";
import TodoPanel from "./TodoPanel";
import Modal from "./Modal";
const TodoApp = () => {
  const { todoState: todos, findTodoById, onTodoAction } = useTodoAppState();
  const { filterState, filterTodos, toggleFilterState } = useFilterState();
  const { editWindow, showEditWindow, closeEditWindow } = useEditWindow();
  const [selectedTodoIds, setSelectedTodoIds] = useState([]);

  const toggleSelectTodo = useCallback((id) => {
    setSelectedTodoIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((todoId) => todoId !== id);
      } else {
        return prev.concat(id);
      }
    });
  }, []);

  const resetSelectedTodoIds = useCallback(() => {
    setSelectedTodoIds([]);
  }, []);

  const filteredTodos = useMemo(() => filterTodos(todos), [filterTodos, todos]);

  return (
    <>
      <div className="mainBody">
        <div className="col1 colorAndRadius">
          <TodoPanel
            todos={filteredTodos}
            onTodoAction={onTodoAction}
            toggleSelectTodo={toggleSelectTodo}
            selectedTodoIds={selectedTodoIds}
            showEditWindow={showEditWindow}
          />
          <BulkActionPanel
            selectedTodoIds={selectedTodoIds}
            resetSelectedTodoIds={resetSelectedTodoIds}
            onTodoAction={onTodoAction}
            findTodoById={findTodoById}
          />
        </div>

        <div className="col2">
          <FilterPanel
            filterState={filterState}
            toggleFilterState={toggleFilterState}
          />
          <Analytics todos={filteredTodos} />
          <CreateTodoForm onTodoAction={onTodoAction} />
        </div>
      </div>
      {editWindow.show && (
        <Modal
          todo={editWindow.data}
          closeEditWindow={closeEditWindow}
          onTodoAction={onTodoAction}
        />
      )}
    </>
  );
};

export default TodoApp;
