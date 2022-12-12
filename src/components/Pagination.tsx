import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { setCurrentPagination } from '../redux/filter/slice';

export const Pagination = () => {

  const dispatch = useDispatch();

  const onChangePage = (e: { selected: number; }) => {
    dispatch(setCurrentPagination(e.selected + 1));
  }

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      pageRangeDisplayed={5}
      pageCount={3}
      previousLabel="<"
      containerClassName="pagination"
      pageClassName="pagination-item"
      onPageChange={onChangePage}
    />
  );
};
