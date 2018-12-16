import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <input
        className="form-control my-3"
        value={value}
        type="text"
        name="query"
        onChange={e => onChange(e.currentTarget.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
