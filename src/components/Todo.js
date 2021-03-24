import { ACTIONS } from "../constants";
import { icons } from "../icons";
import React, { useContext } from "react";
import snackbarContext from "../context/SnackbarContext";
const Todo = ({
  todo,
  onTodoAction,
  toggleSelectTodo,
  showEditWindow,
  isSelected,
}) => {
  const showSnackbar = useContext(snackbarContext);
  const toggleComplete = () => {
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    onTodoAction({
      type: ACTIONS.UPDATE,
      payload: { updatedTodo },
    }).catch(showSnackbar);
  };

  const onDelete = (event) => {
    onTodoAction({
      type: ACTIONS.DELETE,
      payload: { id: todo.id },
    }).catch(showSnackbar);
  };

  const onSelect = (event) => {
    toggleSelectTodo(todo.id);
  };

  const onEdit = () => {
    showEditWindow(todo);
  };

  let todoClassName = "todo";
  if (todo.isCompleted) {
    todoClassName = todoClassName + " opacity";
  }
  if (isSelected) {
    todoClassName = todoClassName + " selected";
  }

  return (
    <div className={todoClassName} data-id={todo.id}>
      <div className="buttons">
        <button className="edit" onClick={onEdit}>
          {icons[ACTIONS.EDIT]}
        </button>
        <button className="delete" onClick={onDelete}>
          {icons[ACTIONS.DELETE]}
        </button>
      </div>

      <div className="todoText">{todo.text}</div>

      <div className="time">{todo.time}</div>

      <div className="symbols">
        {icons[todo.urgency]}
        {icons[todo.category]}
      </div>

      <div className="complete">
        <button className="completeButton" onClick={toggleComplete}>
          {todo.isCompleted ? "Completed. Undo?" : "Mark Complete"}
        </button>
      </div>

      <div
        className={isSelected ? "notSelect bgRed" : "notSelect bgWhite"}
        onClick={onSelect}
      ></div>
    </div>
  );
};

export default React.memo(Todo);

//DOUBT should functions be memoized here?
