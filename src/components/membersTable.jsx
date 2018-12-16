import React, { Component } from "react";
import Table from "./common/table";

export default class MembersTable extends Component {
  render() {
    const { members, sortColumn, onSort } = this.props;
    const columns = [
      { path: "firstname", label: "First Name" },
      { path: "name", label: "Name" },
      { path: "status", label: "Status" }
    ];
    return (
      <Table
        data={members}
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}
