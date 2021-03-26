import React from "react";

import { OptionList } from "./OptionList";

import { CATEGORY, URGENCY } from "../constants";

const TodoForm = React.memo(({ onChange, data }) => (
  <>
    <input
      data-type="text"
      value={data.text}
      type="text"
      className="add-todo"
      placeholder="Add Your Todo..."
      onChange={onChange}
    />
    <div className="urgency">
      <p className="text">Urgency</p>
      <select
        value={data.urgency}
        data-type={"urgency"}
        className="selector"
        onChange={onChange}
      >
        <OptionList value={URGENCY} />
      </select>
    </div>
    <div className="category">
      <p className="text">Category</p>
      <select
        value={data.category}
        data-type="category"
        className="selector"
        onChange={onChange}
      >
        <OptionList value={CATEGORY} />
      </select>
    </div>
  </>
));

export { TodoForm };
