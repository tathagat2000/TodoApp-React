import { TodoList } from "./TodoList";
import { BulkSelectors } from "./BulkSelectors";
import { FilterPanel } from "./FilterPanel";
import { Analytics } from "./Analytics";
import { CreateTodoForm } from "./CreateTodoForm";
import { useTodoAppState } from "../customHooks/useTodoAppState";
import { useFilterState } from "../customHooks/useFilterState";
import { useState } from "react";
import { useEditWindow } from "../customHooks/useEditWindow";
export const TodoApp = () => {
  const [todos, findTodoById, onAction] = useTodoAppState();
  const [filterState, filterTodos, toggleFilterState] = useFilterState();
  const [editWindow, showEditWindow] = useEditWindow(onAction);
  const [selectedTodoIds, setSelectedTodoIds] = useState([]);

  const toggleSelectTodo = (id) => {
    setSelectedTodoIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((todoId) => todoId !== id);
      } else {
        return prev.concat(id);
      }
    });
  };

  const resetSelectedTodoIds = () => {
    setSelectedTodoIds([]);
  };

  const filteredTodos = filterTodos(todos);

  return (
    <>
      <div className="mainBody">
        <div className="col1 colorAndRadius">
          <TodoList
            todos={filteredTodos}
            onAction={onAction}
            toggleSelectTodo={toggleSelectTodo}
            selectedTodoIds={selectedTodoIds}
            showEditWindow={showEditWindow}
          />
          <BulkSelectors
            selectedTodoIds={selectedTodoIds}
            resetSelectedTodoIds={resetSelectedTodoIds}
            onAction={onAction}
            findTodoById={findTodoById}
          />
        </div>

        <div className="col2">
          <FilterPanel
            filterState={filterState}
            toggleFilterState={toggleFilterState}
          />
          <Analytics todos={filteredTodos} />
          <CreateTodoForm onAction={onAction} />
        </div>
      </div>
      {editWindow}
    </>
  );
};