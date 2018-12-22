import React from "../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ data, columns, sortColumn, onSort }) => {
  return (
    <table className="table col">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
