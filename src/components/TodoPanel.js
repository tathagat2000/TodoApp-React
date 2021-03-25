import React from "react";

import { Todo } from "./Todo";

const TodoPanel = React.memo(
  ({ todos, onTodoAction, selectedTodoIds, onEdit }) => (
    <>
      <div className="todoList">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onTodoAction={onTodoAction}
            onEdit={onEdit}
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
