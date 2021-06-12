import React from "react";

const Pagination = ({ goToNextPage, goToPreviousPage }) => {
  return (
    <div>
      <button onClick={goToPreviousPage}>prev</button>
      <button onClick={goToNextPage}>next</button>
    </div>
  )
}

export default Pagination;