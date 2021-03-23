import { URGENCY, CATEGORY } from "../constants";
import { icons } from "../icons";
import React, { useCallback } from "react";

const IconButton = React.memo(({ value, filterState, handleClick }) => {
  return Object.entries(value).map(([key, value]) => {
    let className;
    if (filterState[value]) {
      className = "icon larger";
    } else {
      className = "icon";
    }
    return (
      <button
        onClick={handleClick}
        className={className}
        data-name={value}
        key={key}
      >
        {icons[value]}
      </button>
    );
  });
});

export const FilterPanel = React.memo(({ filterState, toggleFilterState }) => {
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
      <div className="filter colorAndRadius">
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
