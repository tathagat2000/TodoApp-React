import { ACTIONS } from "../constants";
import { icons } from "../icons";
import React from "react";

export const Todo = React.memo(
  ({ todo, onAction, toggleSelectTodo, showEditWindow, isSelected }) => {
    const toggleComplete = (event) => {
      const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
      onAction({
        type: ACTIONS.UPDATE,
        payload: updatedTodo,
      });
    };

    const onDelete = (event) => {
      onAction({
        type: ACTIONS.DELETE,
        payload: todo.id,
      });
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
  }
);

//DOUBT should functions be memoized here?
