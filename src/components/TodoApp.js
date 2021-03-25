import React, { useMemo } from "react";

import { BulkActionPanel } from "./BulkActionPanel";
import { FilterPanel } from "./FilterPanel";
import { Analytics } from "./Analytics";
import { TodoPanel } from "./TodoPanel";
import { Modal } from "./Modal";
import { TodoFormPanel } from "./TodoFormPanel";

import { useTodoAppState } from "../hooks/useTodoAppState";
import { useFilterState } from "../hooks/useFilterState";
import { useEditWindow } from "../hooks/useEditWindow";

const TodoApp = () => {
  const { todoState: todos, onTodoAction, selectedTodoIds } = useTodoAppState();
  const { filterState, filterTodos, toggleFilterState } = useFilterState();
  const { editWindow, showEditWindow, closeEditWindow } = useEditWindow();

  const filteredTodos = useMemo(() => filterTodos(todos), [filterTodos, todos]);

  return (
    <>
      <div className="mainBody">
        <div className="col1 curve">
          <TodoPanel
            todos={filteredTodos}
            onTodoAction={onTodoAction}
            selectedTodoIds={selectedTodoIds}
            onEdit={showEditWindow}
          />
          <BulkActionPanel
            selectedTodoIds={selectedTodoIds}
            onTodoAction={onTodoAction}
          />
        </div>

        <div className="col2">
          <FilterPanel
            filterState={filterState}
            toggleFilterState={toggleFilterState}
          />
          <Analytics todos={filteredTodos} />
          <TodoFormPanel onTodoAction={onTodoAction} />
        </div>
      </div>
      {editWindow.show && (
        <Modal
          initialData={editWindow.data}
          onClose={closeEditWindow}
          onTodoAction={onTodoAction}
        />
      )}
    </>
  );
};

export { TodoApp };
