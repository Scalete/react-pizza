import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchValue } from '../../redux/filter/selectors';
import { setSearchValue } from '../../redux/filter/slice';

export function Search() {

  const searchRef = React.useRef<HTMLInputElement>(null);
  const searchValue = useSelector(useSearchValue);
  const dispatch = useDispatch();

  const onSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };

  const onClearSearch = (search: HTMLInputElement | null) => {
    dispatch(setSearchValue(''));
    search?.focus();
  };

  return (
    <div className="search">
      <div className="search-icon">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="m15.25 15.25-3.364-3.37 3.364 3.37Zm-1.5-7.875a6.375 6.375 0 1 1-12.75 0 6.375 6.375 0 0 1 12.75 0v0Z"
            stroke="#E4E4E4"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <input
        ref={searchRef}
        type="text"
        maxLength={40}
        onChange={onSearchInput}
        value={searchValue}
        placeholder="Поиск..."
      />
      <div
        style={{ display: searchValue ? 'block' : 'none' }}
        onClick={() => onClearSearch(searchRef.current)}
        className="search-close">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="m20.08 18.616-2.449-2.45 2.449-2.448c.944-.944-.52-2.409-1.465-1.464l-2.448 2.448-2.45-2.448c-.943-.944-2.408.52-1.463 1.464l2.448 2.449-2.448 2.448c-.945.945.52 2.41 1.464 1.465l2.449-2.449 2.448 2.449c.945.944 2.41-.52 1.465-1.464Z"
            fill="#B5B5B5"
          />
        </svg>
      </div>
    </div>
  );
}
