import React, { useCallback } from "react";

import { URGENCY, CATEGORY } from "../constants";
import { icons } from "../icons";

const IconButton = React.memo(({ value, isSelected, handleClick }) => (
  <>
    <button
      onClick={handleClick}
      className={isSelected ? "icon larger" : "icon"}
      data-name={value}
    >
      {icons[value]}
    </button>
  </>
));

const FILTER_OBJECT = Object.assign({}, URGENCY, CATEGORY);
const FILTERS = Object.entries(FILTER_OBJECT).map(([key, value]) => [
  key,
  value,
]);

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
          {FILTERS.map(([key, value]) => (
            <IconButton
              handleClick={handleClick}
              isSelected={filterState[value]}
              value={value}
              key={key}
            />
          ))}
        </div>
        <p className="filterText">Filter Todos</p>
      </div>
    </>
  );
});

export { FilterPanel };
