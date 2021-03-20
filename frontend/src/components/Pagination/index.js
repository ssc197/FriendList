import React, { useState, useEffect, useMemo } from "react";

import "./style.scss";
const Pagination = ({
  total = 0,
  itemsPerPage = 4,
  currentPage = 1,
  onPageChange,
}) => {
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (total > 0 && itemsPerPage > 0) {
      setTotalPages(Math.ceil(total / itemsPerPage));
    }
  }, [total, itemsPerPage]);

  const paginationItems = useMemo(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          key={i}
          className={`${i === currentPage ? "active" : ""} waves-effect  page-link`}
          index={i}
          onClick={() => onPageChange(i)}
        >
          <a className="page-item">{i}</a>
        </li>
      );
    }
    return pages;
  }, [totalPages, currentPage, onPageChange]);
  if (totalPages === 0) return null;
  return (
    <>
      {total > itemsPerPage ? (
        <ul className="pagination">
          <button
            className="page-link "
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <i className="material-icons">chevron_left</i>
          </button>
          {paginationItems}
          <button
            className="page-link "
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <i className="material-icons">chevron_right</i>{" "}
          </button>
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

export default Pagination;
