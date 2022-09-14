import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortId, setOrderId } from '../../redux/slices/filterSlice';

export function Sort() {
  const sortData = ['популярности', 'по цене', 'по алфавиту'];
  const sortOrder = ['убыванию', 'возрастанию'];

  const { sortId, orderId } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const renderSortItems = (array, activeElement, setActiveElement) => {
    return array.map((item, index) => (
      <li
        key={index}
        onClick={() => dispatch(setActiveElement(index))}
        className={'sort-item ' + (activeElement === index ? 'active' : '')}>
        {item}
      </li>
    ));
  };

  return (
    <div className="sort">
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 5a.6.6 0 0 1-.186.44.6.6 0 0 1-.439.185H.625a.6.6 0 0 1-.44-.186A.6.6 0 0 1 0 5a.6.6 0 0 1 .186-.44L4.56.187A.6.6 0 0 1 5 0a.6.6 0 0 1 .44.186L9.813 4.56A.6.6 0 0 1 10 5Z"
          fill="#2C2C2C"
        />
      </svg>
      <div className="sort-content">
        Сортировка по: <span>{sortData[sortId]}</span>
        <ul className="sort-list">{renderSortItems(sortData, sortId, setSortId)}</ul>
      </div>
      <div className="sort-content">
        <span>{sortOrder[orderId]}</span>
        <ul className="sort-list">{renderSortItems(sortOrder, orderId, setOrderId)}</ul>
      </div>
    </div>
  );
}
