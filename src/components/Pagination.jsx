import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { setCurrentPagination } from '../redux/slices/filterSlice';

export const Pagination = () => {

  const dispatch = useDispatch();

  const onChangePage = (e) => {
    dispatch(setCurrentPagination(e.selected + 1));
  }

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      pageRangeDisplayed={5}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
      containerClassName="pagination"
      pageClassName="pagination-item"
      onPageChange={onChangePage}
    />
  );
};
