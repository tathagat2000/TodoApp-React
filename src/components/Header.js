import React from "react";
const Header = () => {
  const currentDate = new Date().toDateString();
  return (
    <>
      <div className="header colorAndRadius">
        <div className="date">{currentDate}</div>
        <div className="heading">To-Do App</div>
      </div>
    </>
  );
};

export default React.memo(Header);
