import React from "../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import PropTypes from "../../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types";
import _ from "../../../../../../Library/Caches/typescript/2.9/node_modules/@types/lodash";

const Pagination = ({ itemsCount, pagesSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pagesSize);
  const pages = _.range(1, pagesCount + 1);
  if (pagesCount < 1) return null;
  return (
    <nav>
      <ul className="pagination">
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
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pagesSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
