import React from 'react';
import { Category } from '../components/Filter/Category';
import { Search } from '../components/Filter/Search';
import { Sort } from '../components/Filter/Sort';
import { Product } from '../components/Product';
import { Skeleton } from '../components/Skeleton';
import { Pagination } from '../components/Pagination';

import { useSelector } from 'react-redux';

import axios from 'axios';

export function Main() {
  const [products, setProducts] = React.useState([]);
  const [onLoading, setOnLoading] = React.useState(true);

  const { categoryId, sortId, orderId, currentPagination, searchValue } = useSelector((state) => state.filter);

  React.useEffect(() => {
    async function fetchData() {
      const pizzas = await axios.get(
        `https://6314d07efa82b738f74eb750.mockapi.io/items?category=${
          categoryId === 0 ? '' : categoryId
        }&sortBy=${renderSortDataParam()}&order=${renderSortOrder()}&page=${currentPagination}&limit=4`,
      );
      setProducts(pizzas.data);
      setOnLoading(false);
    }

    const renderSortDataParam = () => {
      const sortData = {
        0: 'rating',
        1: 'price',
        2: 'name',
      };

      return sortData[sortId];
    };

    const renderSortOrder = () => {
      const sortOrder = {
        0: 'desc',
        1: 'asc',
      };

      return sortOrder[orderId];
    };

    fetchData();
  }, [categoryId, sortId, orderId, currentPagination]);

  const renderProducts = () => {
    return products
      .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
      .map((item, index) => (
        <Product
          key={index}
          title={item.name}
          types={item.types}
          sizes={item.sizes}
          price={item.price}
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
        <Sort />
      </div>
      <div className="products">
        <div className="products-heading">
          <h1 className="products-title">Все пиццы</h1>
          <Search />
        </div>
        <div className="products-wrapper">{onLoading ? renderSkeleton() : renderProducts()}</div>
        <Pagination />
      </div>
    </>
  );
}
