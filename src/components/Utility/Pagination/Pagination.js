import React from 'react'
import './pagination.scss'

// Package Imports
import ReactPaginate from 'react-paginate'

const Pagination = props => {
    const { pageCount, handlePageClick, listView } = props
    return (
      <div className={`pagination ${listView ? 'listView' : ''}`}>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          pageLinkClassName="link"
          activeLinkClassName="active-link"
          containerClassName={'react-paginate'}
          subContainerClassName={'pages react-paginate'}
          activeClassName={'active'}
        />
      </div>
    )
}

export default Pagination
