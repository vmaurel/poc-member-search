import React from "../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";

const Select = ({
  name,
  label,
  options,
  error,
  value,
  valueProperty,
  textProperty,
  ...rest
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} className="form-control" {...rest}>
        <option value="" key="" />
        {options.map(item => (
          <option key={item[valueProperty]} value={item[valueProperty]}>
            {item[textProperty]}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

Select.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default Select;
