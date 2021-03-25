import React from "react";

import { useSnackbar } from "./SnackbarProvider";

import { ACTIONS, NAMES } from "../constants";
import { icons } from "../icons";

const Todo = React.memo(({ todo, onTodoAction, onEdit, isSelected }) => {
  const showSnackbar = useSnackbar();

  const onToggleComplete = () => {
    onTodoAction({
      type: ACTIONS.SET_ISCOMPLETED,
      payload: { ids: [todo.id], isCompleted: !todo.isCompleted },
    }).catch(showSnackbar);
  };

  const onDelete = (event) => {
    onTodoAction({
      type: ACTIONS.DELETE,
      payload: { id: todo.id },
    }).catch(showSnackbar);
  };

  const onSelect = (event) => {
    onTodoAction({
      type: ACTIONS.TOGGLE_SELECTED_TODO,
      payload: { id: todo.id },
    });
  };

  const handleEdit = () => {
    onEdit(todo);
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
        <button className="edit" onClick={handleEdit}>
          {icons[ACTIONS.EDIT]}
        </button>
        <button className="delete" onClick={onDelete}>
          {icons[ACTIONS.DELETE]}
        </button>
      </div>

      <div className="todoText">{todo[NAMES.TEXT]}</div>

      <div className="time">{todo[NAMES.TIME]}</div>

      <div className="symbols">
        {icons[todo[NAMES.URGENCY]]}
        {icons[todo[NAMES.CATEGORY]]}
      </div>

      <div className="complete">
        <button className="completeButton" onClick={onToggleComplete}>
          {todo.isCompleted ? "Completed. Undo?" : "Mark Complete"}
        </button>
      </div>

      <div
        className={isSelected ? "notSelect bgRed" : "notSelect bgWhite"}
        onClick={onSelect}
      ></div>
    </div>
  );
});

export { Todo };

//DOUBT should functions be memoized here?
