import React from "react";

import { Todo } from "./Todo";

const TodoPanel = React.memo(
  ({
    todos,
    onTodoAction,
    toggleSelectTodo,
    selectedTodoIds,
    showEditWindow,
  }) => (
    <>
      <div className="todoList">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onTodoAction={onTodoAction}
            toggleSelectTodo={toggleSelectTodo}
            showEditWindow={showEditWindow}
            isSelected={selectedTodoIds.includes(todo.id)}
          />
        ))}
      </div>
    </>
  )
);

export { TodoPanel };
//DOUBT does it make sense to memoize Todo?
//React.memo remembers previous memoized value, or many memoized values?
