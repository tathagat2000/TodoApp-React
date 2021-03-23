import { Todo } from "./Todo";
export const TodoList = ({
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
