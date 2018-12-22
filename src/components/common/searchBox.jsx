import React from "react";

const SearchBox = ({ placeholer, name, value, onChange }) => {
  return (
    <div className="form-group">
      <input
        className="form-control my-3"
        value={value}
        type="text"
        name={name}
        placeholder={placeholer}
        onChange={e => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBox;
