import React from "react";
import { Select } from "antd";
import './customselectbox.sass'
export const CustomSelectBox = ({
  options,
  onChange,
  defValue,
  field,
}) => {
  const { Option } = Select;
  return (
    <Select
      className="selectbox"
      defaultValue={defValue}
      onChange={(value, label, event) => {
        onChange(value, label);
      }}
    >
      {options.map((option) => (
        <Option value={option.value} key={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};
