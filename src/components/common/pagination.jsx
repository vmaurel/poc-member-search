import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ itemsCount, pagesSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pagesSize);
  let pages = _.range(1, pagesCount + 1);
  let showArrows = false;
  if (pagesCount > 7) {
    pages = [];
    const firstPage = Math.max(Math.min(currentPage - 3, pagesCount - 6), 1);
    for (let i = 0; i < 7; i++) {
      pages.push(firstPage + i);
    }
    showArrows = true;
  }
  if (pagesCount < 1) return null;
  return (
    <div className="text-center">
      <ul className="pagination">
        {showArrows && currentPage !== 1 && (
          <li>
            <a className="page-link" onClick={() => onPageChange(1)}>
              {"<<"}
            </a>
          </li>
        )}
        {showArrows && currentPage !== 1 && (
          <li>
            <a
              className="page-link"
              onClick={() => onPageChange(currentPage - 1)}
            >
              {"<"}
            </a>
          </li>
        )}
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
        {showArrows && currentPage !== pagesCount && (
          <li>
            <a
              className="page-link"
              onClick={() => onPageChange(currentPage + 1)}
            >
              {">"}
            </a>
          </li>
        )}
        {showArrows && currentPage !== pagesCount && (
          <li>
            <a className="page-link" onClick={() => onPageChange(pagesCount)}>
              {">>"}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pagesSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
