import React from "react";

function Pagination({ page, pagecount, setPage }) {
  const paginate = (option) => {
    switch (option) {
      case "first":
        setPage(1);
        break;
      case "last":
        setPage(pagecount);
        break;
      case "prev":
        if (page > 1) {
          setPage((prevpage) => prevpage - 1);
        }
        break;
      case "next":
        if (page < pagecount) {
          setPage((prevpage) => prevpage + 1);
        }
        break;
      default:
        setPage(1);
    }
  };

  return (
    <div className="btn-group">
      <button
        className="btn btn-primary btn-sm"
        onClick={() => paginate("first")}
      >
        <i className="fas fa-angle-left"></i>
      </button>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => paginate("prev")}
      >
        <i className="fas fa-angle-double-left"></i>
      </button>
      <button className="btn btn-default">
        Page {page} of {pagecount}
      </button>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => paginate("next")}
      >
        <i className="fas fa-angle-double-right"></i>
      </button>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => paginate("last")}
      >
        <i className="fas fa-angle-right"></i>
      </button>
    </div>
  );
}

export default Pagination;