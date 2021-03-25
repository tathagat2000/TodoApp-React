import React from "react";

const getRatioInDecimal = (numberOfTodos, numberOfCompletedTodos) => {
  let value;
  if (numberOfCompletedTodos === 0) {
    value = 0;
  } else {
    value = Math.round((100 * numberOfCompletedTodos) / numberOfTodos);
  }

  return value + " % ";
};

const getRatioInFraction = (numberOfTodos, numberOfCompletedTodos) => {
  return numberOfCompletedTodos + " / " + numberOfTodos;
};

const Analytics = React.memo(({ todos }) => {
  const numberOfTodos = todos.length;
  const numberOfCompletedTodos = todos.filter(
    (todo) => todo.isCompleted === true
  ).length;

  const ratioInDecimal = getRatioInDecimal(
    numberOfTodos,
    numberOfCompletedTodos
  );

  const rationInFraction = getRatioInFraction(
    numberOfTodos,
    numberOfCompletedTodos
  );
  return (
    <div className="analytics curve">
      <div className="circle">
        <div className="percent">{ratioInDecimal}</div>
        <div className="ratio">{rationInFraction}</div>
      </div>
      <p className="analyticsText">Analytics</p>
    </div>
  );
});

export { Analytics };
