import { useState, useCallback } from "react";

import { URGENCY, CATEGORY } from "../constants";

const initialFilterState = {
  [URGENCY.LOW]: false,
  [URGENCY.MEDIUM]: false,
  [URGENCY.HIGH]: false,
  [CATEGORY.PERSONAL]: false,
  [CATEGORY.ACADEMIC]: false,
  [CATEGORY.SOCIAL]: false,
};
const computeUrgencyFilterValue = (filterState) =>
  filterState[URGENCY.LOW] ||
  filterState[URGENCY.MEDIUM] ||
  filterState[URGENCY.HIGH];

const computeCategoryFilterValue = (filterState) =>
  filterState[CATEGORY.PERSONAL] ||
  filterState[CATEGORY.ACADEMIC] ||
  filterState[CATEGORY.SOCIAL];

const filterAccordingToUrgencyAndCategory = (filterState, todos) =>
  todos.filter(
    (todo) => filterState[todo.urgency] || filterState[todo.category]
  );

const useFilterState = () => {
  const [filterState, setFilterState] = useState(initialFilterState);

  const toggleFilterState = useCallback((filter) => {
    setFilterState((prev) => ({ ...prev, [filter]: !prev[filter] }));
  }, []);

  const filterTodos = useCallback(
    (todos) => {
      const urgencyFilter = computeUrgencyFilterValue(filterState);
      const categoryFilter = computeCategoryFilterValue(filterState);
      if (urgencyFilter === false && categoryFilter === false) {
        return todos;
      }
      return filterAccordingToUrgencyAndCategory(filterState, todos);
    },
    [filterState]
  );

  return { filterState, filterTodos, toggleFilterState };
};

export { useFilterState };
