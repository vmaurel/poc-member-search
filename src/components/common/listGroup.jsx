import React from "react";

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  onItemSelected,
  selectedItem
}) => {
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          onClick={() => onItemSelected(item)}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
          key={item[valueProperty]}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
