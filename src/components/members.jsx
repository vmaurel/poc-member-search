import React, { Component } from "react";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import SearchBox from "./common/searchBox";
import MembersTable from "./membersTable";
import _ from "lodash";
import { getMembers } from "../services/membersService";

export default class Movies extends Component {
  state = {
    members: [],
    pagesSize: 100,
    currentPage: 1,
    searchQuery: "",
    sortColumn: { path: "firstname", order: "asc" }
  };

  async componentDidMount() {
    const { data: members } = await getMembers();
    this.setState({ members });
  }

  handlePageChanged = page => {
    this.setState({ currentPage: page });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      members: allMembers,
      pagesSize,
      currentPage,
      searchQuery,
      sortColumn
    } = this.state;
    console.log("Members 1", allMembers[0]);
    let filtered = allMembers;

    if (searchQuery)
      filtered = allMembers.filter(
        m =>
          m.firstname.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
          m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const members = paginate(sorted, currentPage, pagesSize);

    return { totalCount: filtered.length, data: members };
  };

  render() {
    const { length: count } = this.state.members;
    const { pagesSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count === 0) return <p>Loading data...</p>;

    const { totalCount, data } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3" />
        <div className="col">
          <p>There are {totalCount} members</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <MembersTable
            members={data}
            sortColumn={sortColumn}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pagesSize={pagesSize}
            onPageChange={pageSelected => this.handlePageChanged(pageSelected)}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}
