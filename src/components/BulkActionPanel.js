import React from "react";

import { useSnackbarContext } from "./SnackbarProvider";

import { ACTIONS } from "../constants";
import { icons } from "../icons";

const BulkActionPanel = React.memo(({ selectedTodoIds, onTodoAction }) => {
  const showSnackbar = useSnackbarContext();

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
      <div className="bulk-selection">
        <div className="complete-selection">
          <div className="hidden-text-complete-selection">
            Mark Selection Complete
          </div>
          <button className="round" onClick={setComplete}>
            {icons[ACTIONS.BULKCOMPLETE]}
          </button>
        </div>

        <div className="incomplete-selection">
          <span className="hidden-text-incomplete-selection">
            Mark Selection Incomplete
          </span>
          <button className="round" onClick={setIncomplete}>
            {icons[ACTIONS.BULKINCOMPLETE]}
          </button>
        </div>

        <div className="delete-selection">
          <span className="hidden-text-delete-selection">Delete Selection</span>
          <button className="round" onClick={onDelete}>
            {icons[ACTIONS.BULKDELETE]}
          </button>
        </div>
      </div>
    </>
  );
});

export { BulkActionPanel };
