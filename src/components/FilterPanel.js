import { URGENCY, CATEGORY } from "../constants";
import { icons } from "../icons";
import React, { useCallback } from "react";

const IconButton = React.memo(({ value, filterState, handleClick }) => {
  return Object.entries(value).map(([key, value]) => {
    return (
      <button
        onClick={handleClick}
        className={filterState[value] === true ? "icon larger" : "icon"}
        data-name={value}
        key={key}
      >
        {icons[value]}
      </button>
    );
  });
});

const FilterPanel = ({ filterState, toggleFilterState }) => {
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
};

export default React.memo(FilterPanel);
