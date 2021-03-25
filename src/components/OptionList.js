import React from "react";

const OptionList = ({ value }) => {
  return (
    <>
      {Object.entries(value).map(([key, value]) => {
        return (
          <option value={value} key={key}>
            {value}
          </option>
        );
      })}
    </>
  );
};

export default React.memo(OptionList);
