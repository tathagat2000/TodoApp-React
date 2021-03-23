import { Todo } from "./Todo";
import React from "react";
const TodoList = ({
  todos,
  onAction,
  toggleSelectTodo,
  selectedTodoIds,
  showEditWindow,
}) => {
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
};
export default React.memo(TodoList);
//DOUBT does it make sense to memoize Todo?
//React.memo remembers previous memoized value, or many memoized values?
