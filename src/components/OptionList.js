import React from "react";

const OptionList = React.memo(({ value }) => (
  <>
    {Object.entries(value).map(([key, value]) => (
      <option value={value} key={key}>
        {value}
      </option>
    ))}
  </>
));

export { OptionList };
