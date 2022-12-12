import React from 'react';
import Category from '../components/Filter/Category';
import { Search } from '../components/Filter/Search';
import Sort from '../components/Filter/Sort';
import Product from '../components/Product';
import { Skeleton } from '../components/Skeleton';
import { Pagination } from '../components/Pagination';

import { useSelector } from 'react-redux';

import { Pizza } from '../redux/pizza/types';
import { useAppDispatch } from '../redux/store';
import { useFilter } from '../redux/filter/selectors';
import { usePizza } from '../redux/pizza/selectors';
import { fetchPizzas } from '../redux/pizza/asyncAction';

export function Main() {
  const { categoryId, sortId, orderId, currentPagination, searchValue } = useSelector(useFilter);
  const { pizzasData, status }: {pizzasData: Pizza[], status: string} = useSelector(usePizza);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    
    dispatch(
      fetchPizzas(
        {
          sortId,
          orderId,
          categoryId,
          currentPagination
        }
    ));

  }, [categoryId, sortId, orderId, currentPagination, dispatch]);

  const renderProducts = () => {
    return pizzasData
      .filter((item) => item.name?.toLowerCase().includes(searchValue.toLowerCase()))
      .map((item, index) => (
        <Product
          key={index}
          id={item.id}
          title={item.name}
          types={item.types}
          sizes={item.sizes}
          price={item.price}
          imageUrl={item.imageUrl}
        />
      ));
  };

  const renderSkeleton = () => {
    return [...Array(6)].map((item, i) => <Skeleton key={i} />);
  };

  return (
    <>
      <div className="filters">
        <Category />
        <Sort sortId={sortId} orderId={orderId}/>
      </div>
      <div className="products">
        <div className="products-heading">
          <h1 className="products-title">Все пиццы</h1>
          <Search />
        </div>
        <div className="products-wrapper">{status === 'loading' ? renderSkeleton() : renderProducts()}</div>
        <Pagination />
      </div>
    </>
  );
}
