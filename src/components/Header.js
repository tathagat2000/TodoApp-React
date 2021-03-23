import React from "react";
export const Header = React.memo(() => {
  const currentDate = new Date().toDateString();
  return (
    <>
      <div className="header colorAndRadius">
        <div className="date">{currentDate}</div>
        <div className="heading">To-Do App</div>
      </div>
    </>
  );
});
