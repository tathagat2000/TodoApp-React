import { URGENCY, CATEGORY, NAMES } from "../constants";
import { useState, useCallback } from "react";

const initialFilterState = {
  [URGENCY.LOW]: false,
  [URGENCY.MEDIUM]: false,
  [URGENCY.HIGH]: false,
  [CATEGORY.PERSONAL]: false,
  [CATEGORY.ACADEMIC]: false,
  [CATEGORY.SOCIAL]: false,
};

const useFilterState = () => {
  const [filterState, setFilterState] = useState(initialFilterState);

  const toggleFilterState = useCallback((filter) => {
    setFilterState((prev) => ({ ...prev, [filter]: !prev[filter] }));
  }, []);

  const computeUrgencyFilterValue = () => {
    return (
      filterState[URGENCY.LOW] ||
      filterState[URGENCY.MEDIUM] ||
      filterState[URGENCY.HIGH]
    );
  };

  const computeCategoryFilterValue = () => {
    return (
      filterState[CATEGORY.PERSONAL] ||
      filterState[CATEGORY.ACADEMIC] ||
      filterState[CATEGORY.SOCIAL]
    );
  };

  const filterAccordingToUrgencyAndCategory = (todos) => {
    return todos.filter((todo) => {
      return (
        filterState[[todo[NAMES.URGENCY]]] ||
        filterState[[todo[NAMES.CATEGORY]]]
      );
    });
  };

  const filterTodos = useCallback(
    (todos) => {
      const urgencyFilter = computeUrgencyFilterValue();

      const categoryFilter = computeCategoryFilterValue();

      if (urgencyFilter === false && categoryFilter === false) {
        return todos;
      }

      return filterAccordingToUrgencyAndCategory(todos);
    },
    [filterState]
  );
  //DOUBT

  return [filterState, filterTodos, toggleFilterState];
};

export default useFilterState;
