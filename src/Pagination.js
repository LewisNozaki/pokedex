import React from "react";

const Pagination = ({ goToNextPage, goToPreviousPage }) => {
  return (
    <div>
      {goToPreviousPage && <button onClick={goToPreviousPage}>prev</button>}
      {goToNextPage && <button onClick={goToNextPage}>next</button>}
    </div>
  )
}

export default Pagination;