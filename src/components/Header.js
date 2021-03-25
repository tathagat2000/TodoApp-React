import React, { useEffect, useState } from "react";
const Header = () => {
  const [date, setDate] = useState(new Date().toDateString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date().toDateString());
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="header colorAndRadius">
        <div className="date">{date}</div>
        <div className="heading">To-Do App</div>
      </div>
    </>
  );
};

export default Header;
