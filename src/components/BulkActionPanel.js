import { ACTIONS } from "../constants";
import { icons } from "../icons";
import React, { useContext } from "react";
import snackbarContext from "../context/snackbarContext";

const BulkActionPanel = ({
  selectedTodoIds,
  resetSelectedTodoIds,
  onTodoAction,
  findTodoById,
}) => {
  const handleSnackbar = useContext(snackbarContext);
  const updateCompletedValue = (isCompleted) => {
    const updatedTodos = selectedTodoIds.map(findTodoById).map((todo) => {
      return { ...todo, isCompleted };
    });
    onTodoAction({
      type: ACTIONS.UPDATE,
      payload: { updatedTodo: updatedTodos },
    })
      .then(() => {
        resetSelectedTodoIds();
      })
      .catch((err) => {
        handleSnackbar();
      });
  };

  const onDelete = () => {
    onTodoAction({
      type: ACTIONS.DELETE,
      payload: { id: selectedTodoIds },
    })
      .then(() => {
        resetSelectedTodoIds();
      })
      .catch((err) => {
        handleSnackbar();
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
