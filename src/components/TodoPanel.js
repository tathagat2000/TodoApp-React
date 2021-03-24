import Todo from "./Todo";
import React from "react";
const TodoPanel = ({
  todos,
  onTodoAction,
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
            onTodoAction={onTodoAction}
            toggleSelectTodo={toggleSelectTodo}
            showEditWindow={showEditWindow}
            isSelected={selectedTodoIds.includes(todo.id)}
          />
        ))}
      </div>
    </>
  );
};
export default React.memo(TodoPanel);
//DOUBT does it make sense to memoize Todo?
//React.memo remembers previous memoized value, or many memoized values?
