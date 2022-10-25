import React from "react";

const SelectOption = ({ arr, id, val, onC }) => {
  console.log(arr);
  return (
    <select onChange={onC}>
      <option value="sel">{val}</option>
      {arr.map((value, index) => {
        return <option value={index}>{value}</option>;
      })}
    </select>
  );
};

export default SelectOption;
