import { Todo } from "./Todo";
import React from "react";
export const TodoList = React.memo(
  ({ todos, onAction, toggleSelectTodo, selectedTodoIds, showEditWindow }) => {
    return (
      <>
        <div className="todoList">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onAction={onAction}
              toggleSelectTodo={toggleSelectTodo}
              showEditWindow={showEditWindow}
              isSelected={selectedTodoIds.includes(todo.id)}
            />
          ))}
        </div>
      </>
    );
  }
);
//DOUBT does it make sense to memoize Todo?
//React.memo remembers previous memoized value, or many memoized values?
