import React, { Component } from "react";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import SearchBox from "./common/searchBox";
import MembersTable from "./membersTable";
import Select from "./common/select";
import _ from "lodash";
import { getMembers } from "../services/membersService";

export default class Movies extends Component {
  state = {
    members: [],
    pagesSize: 10,
    currentPage: 1,
    searchQueryFirstName: "",
    searchQueryName: "",
    sortColumn: { path: "firstname", order: "asc" }
  };

  async componentDidMount() {
    const { data: members } = await getMembers();
    this.setState({ members });
  }

  handlePageChanged = page => {
    this.setState({ currentPage: page });
  };

  handlePageSizeChanged = pagesSize => {
    this.setState({ pagesSize: parseInt(pagesSize, 10) });
  };

  handleFilter = query => {
    this.setState({
      searchQuery: query,
      selectedGenre: null,
      currentPage: 1
    });
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
    if (searchQuery) {
      filtered = allMembers.filter(
        m =>
          (m.firstname.toLowerCase() + " " + m.name.toLowerCase()).startsWith(
            searchQuery.toLowerCase()
          ) ||
          (m.name.toLowerCase() + " " + m.firstname.toLowerCase()).startsWith(
            searchQuery.toLowerCase()
          )
      );
    }

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const members = paginate(sorted, currentPage, pagesSize);

    return { totalCount: filtered.length, data: members };
  };

  render() {
    const { length: count } = this.state.members;
    const { pagesSize, currentPage, sortColumn, searchQuery } = this.state;
    const pagesSizes = [
      { name: "10", _id: 10 },
      { name: "25", _id: 25 },
      { name: "50", _id: 50 },
      { name: "100", _id: 100 },
      { name: "200", _id: 200 }
    ];
    if (count === 0) return <p>Loading data...</p>;

    const { totalCount, data } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-8">
          <p>There are {totalCount} members</p>
          <div className="row">
            <div className="col">
              <SearchBox
                placeholer="Search"
                name="searchQuery"
                value={searchQuery}
                onChange={this.handleFilter}
              />
            </div>
            <div className="col-2">
              <Select
                label=""
                name="pageSize"
                options={pagesSizes}
                value={pagesSize}
                onChange={this.handlePageSizeChanged}
                style={{
                  width: 80,
                  display: "ïnline-block",
                  "margin-top": -8
                }}
              />
            </div>
          </div>

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
