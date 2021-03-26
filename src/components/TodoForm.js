import React from "react";

import { OptionList } from "./OptionList";

import { CATEGORY, NAMES, URGENCY } from "../constants";

const TodoForm = React.memo(({ onChange, data }) => (
  <>
    <input
      data-type={NAMES.TEXT}
      value={data[NAMES.TEXT]}
      type="text"
      className="addTodo"
      placeholder="Add Your Todo..."
      onChange={onChange}
    />
    <div className="urgency">
      <p className="text">Urgency</p>
      <select
        value={data[NAMES.URGENCY]}
        data-type={NAMES.URGENCY}
        className="selector"
        onChange={onChange}
      >
        <OptionList value={URGENCY} />
      </select>
    </div>
    <div className="category">
      <p className="text">Category</p>
      <select
        value={data[NAMES.CATEGORY]}
        data-type={NAMES.CATEGORY}
        className="selector"
        onChange={onChange}
      >
        <OptionList value={CATEGORY} />
      </select>
    </div>
  </>
));

export { TodoForm };
