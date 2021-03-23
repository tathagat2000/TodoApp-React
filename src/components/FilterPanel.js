import { URGENCY, CATEGORY } from "../constants";
import { icons } from "../icons";

const IconButton = ({ value, filterState, handleClick }) => {
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
};
export const FilterPanel = ({ filterState, toggleFilterState }) => {
  const handleClick = (event) => {
    const element = event.target.closest("[data-name]");
    if (element) {
      toggleFilterState(element.dataset.name);
    }
  };
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
