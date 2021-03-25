import React, { useCallback } from "react";

import { URGENCY, CATEGORY } from "../constants";
import { icons } from "../icons";

const IconButton = React.memo(({ value, filterState, handleClick }) =>
  Object.entries(value).map(([key, value]) => (
    <button
      onClick={handleClick}
      className={filterState[value] === true ? "icon larger" : "icon"}
      data-name={value}
      key={key}
    >
      {icons[value]}
    </button>
  ))
);

const FilterPanel = React.memo(({ filterState, toggleFilterState }) => {
  const handleClick = useCallback(
    (event) => {
      const element = event.target.closest("[data-name]");
      if (element) {
        toggleFilterState(element.dataset.name);
      }
    },
    [toggleFilterState]
  );
  return (
    <>
      <div className="filter curve">
        <div className="logos">
          {
            <IconButton
              value={URGENCY}
              filterState={filterState}
              handleClick={handleClick}
            />
          }
          {
            <IconButton
              value={CATEGORY}
              filterState={filterState}
              handleClick={handleClick}
            />
          }
        </div>
        <p className="filterText">Filter Todos</p>
      </div>
    </>
  );
});

export { FilterPanel };
