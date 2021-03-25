import React from "react";

const getRatioInDecimal = (numerator, denominator) => {
  let value;
  if (denominator === 0) {
    value = 0;
  } else {
    value = Math.round((100 * numerator) / denominator);
  }
  return value + " % ";
};

const Analytics = React.memo(({ todos }) => {
  const numberOfTodos = todos.length;
  const numberOfCompletedTodos = todos.filter(
    (todo) => todo.isCompleted === true
  ).length;

  const ratioInDecimal = getRatioInDecimal(
    numberOfCompletedTodos,
    numberOfTodos
  );
  const rationInFraction = numberOfCompletedTodos + " / " + numberOfTodos;

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
