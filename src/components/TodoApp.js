import React, { useMemo } from "react";

import { BulkActionPanel } from "./BulkActionPanel";
import { FilterPanel } from "./FilterPanel";
import { Analytics } from "./Analytics";
import { TodoList } from "./TodoList";
import { EditWindow } from "./EditWindow";
import { Modal } from "./Modal";
import { TodoFormContainer } from "./TodoFormContainer";

import { useTodoState } from "../hooks/useTodoState";
import { useFilterState } from "../hooks/useFilterState";
import { useOverlay } from "../hooks/useOverlay";

const TodoApp = () => {
  const { todoState: todos, onTodoAction, selectedTodoIds } = useTodoState();
  const { filterState, filterTodos, toggleFilterState } = useFilterState();
  const { overlay, showOverlay, closeOverlay } = useOverlay();

  const filteredTodos = useMemo(() => filterTodos(todos), [filterTodos, todos]);

  return (
    <>
      <div className="mainBody">
        <div className="col1 curve">
          <TodoList
            todos={filteredTodos}
            onTodoAction={onTodoAction}
            selectedTodoIds={selectedTodoIds}
            onEdit={showOverlay}
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
          <TodoFormContainer onTodoAction={onTodoAction} />
        </div>
      </div>
      {overlay.show && (
        <Modal>
          <EditWindow
            initialData={overlay.data}
            onClose={closeOverlay}
            onTodoAction={onTodoAction}
          />
        </Modal>
      )}
    </>
  );
};

export { TodoApp };
