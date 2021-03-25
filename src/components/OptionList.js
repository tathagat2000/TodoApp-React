import React from "react";

const OptionList = React.memo(({ value }) => {
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
});

export { OptionList };
