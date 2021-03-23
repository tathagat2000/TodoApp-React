import { ACTIONS } from "../constants";
import { icons } from "../icons";
import React from "react";

const BulkActionPanel = ({
  selectedTodoIds,
  resetSelectedTodoIds,
  onAction,
  findTodoById,
}) => {
  const updateCompletedValue = (isCompleted) => {
    const updatedTodos = selectedTodoIds.map(findTodoById).map((todo) => {
      return { ...todo, isCompleted };
    });
    onAction({
      type: ACTIONS.UPDATE,
      payload: updatedTodos,
    })
      .then(() => {
        resetSelectedTodoIds();
      })
      .catch((err) => {
        console.log(err);
        //ADD SNACKBAR HERE
      });
  };

  const onDelete = () => {
    onAction({
      type: ACTIONS.DELETE,
      payload: selectedTodoIds,
    })
      .then(() => {
        resetSelectedTodoIds();
      })
      .catch((err) => {
        console.log(err);
        //ADD SNACKBAR HERE
      });
  };

  return (
    <>
      <div className="bulkSelection">
        <div className="completeSelection">
          <div className="hiddenTextCompleteSelection">
            Mark Selection Complete
          </div>
          <button className="round" onClick={() => updateCompletedValue(true)}>
            {icons[ACTIONS.BULKCOMPLETE]}
          </button>
        </div>

        <div className="incompleteSelection">
          <span className="hiddenTextIncompleteSelection">
            Mark Selection Incomplete
          </span>
          <button className="round" onClick={() => updateCompletedValue(false)}>
            {icons[ACTIONS.BULKINCOMPLETE]}
          </button>
        </div>

        <div className="deleteSelection">
          <span className="hiddenTextDeleteSelection">Delete Selection</span>
          <button className="round" onClick={onDelete}>
            {icons[ACTIONS.BULKDELETE]}
          </button>
        </div>
      </div>
    </>
  );
};

export default React.memo(BulkActionPanel);