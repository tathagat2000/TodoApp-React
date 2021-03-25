import React from "react";

import { useSnackbar } from "./SnackbarProvider";

import { ACTIONS } from "../constants";
import { icons } from "../icons";

const BulkActionPanel = React.memo(({ selectedTodoIds, onTodoAction }) => {
  const showSnackbar = useSnackbar();

  const updateCompletedValue = (isCompleted) => {
    onTodoAction({
      type: ACTIONS.SET_ISCOMPLETED,
      payload: { ids: selectedTodoIds, isCompleted },
    })
      .then(() => {
        onTodoAction({
          type: ACTIONS.RESET_SELECTED_TODOS,
        });
      })
      .catch(showSnackbar);
  };

  const onDelete = () => {
    onTodoAction({
      type: ACTIONS.DELETE,
      payload: { id: selectedTodoIds },
    })
      .then(() => {
        onTodoAction({
          type: ACTIONS.RESET_SELECTED_TODOS,
        });
      })
      .catch(showSnackbar);
  };

  const setComplete = () => updateCompletedValue(true);
  const setIncomplete = () => updateCompletedValue(false);

  return (
    <>
      <div className="bulkSelection">
        <div className="completeSelection">
          <div className="hiddenTextCompleteSelection">
            Mark Selection Complete
          </div>
          <button className="round" onClick={setComplete}>
            {icons[ACTIONS.BULKCOMPLETE]}
          </button>
        </div>

        <div className="incompleteSelection">
          <span className="hiddenTextIncompleteSelection">
            Mark Selection Incomplete
          </span>
          <button className="round" onClick={setIncomplete}>
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
});

export { BulkActionPanel };
