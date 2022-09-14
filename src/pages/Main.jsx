import React from 'react'
import { Category } from '../components/Filter/Category';
import { Search } from '../components/Filter/Search';
import { Sort } from '../components/Filter/Sort';
import { Product } from '../components/Product';
import { Skeleton } from '../components/Skeleton';

import axios from 'axios'

export function Main() {

  const [products, setProducts] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [sortDataActive, setSortDataActive] = React.useState(0);
  const [sortFilterActive, setSortFilterActive] = React.useState(0);
  const [onLoading, setOnLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const pizzas = await axios.get(`https://6314d07efa82b738f74eb750.mockapi.io/items?category=${activeCategory === 0?'':activeCategory}&sortBy=${renderSortDataParam()}&order=${renderSortDataFilterParam()}` );
      setProducts(pizzas.data);
      setOnLoading(false);
    }

    const renderSortDataParam = () => {
      const sortData = {
        0: "rating",
        1: "price",
        2: "name",
      }
  
      return sortData[sortDataActive];
    }

    const renderSortDataFilterParam = () => {
      const sortFilter = {
        0: "desc",
        1: "asc",
      }
  
      return sortFilter[sortFilterActive];
    }

    fetchData();

  }, [activeCategory, sortDataActive, sortFilterActive]);

  const renderProducts = () => {
    return products.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => <Product key={index} title={item.name} types={item.types} sizes={item.sizes} price={item.price}/>);
  }

  const renderSkeleton = () => {
    return [...Array(6)].map((item, i) => <Skeleton key={i}/>);
  }

  const onSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const onClearSearch = () => {
    setSearchValue('');
  };

  const onClickCategory = (index, setActiveMobileCategory) => {
    setActiveCategory(index);
    setActiveMobileCategory(false);
  }

  return (
    <>
      <div className="filters">
          <Category onClickCategory={onClickCategory} activeCategory={activeCategory} />
          <Sort sortDataActive={sortDataActive} setSortDataActive={setSortDataActive} sortFilterActive={sortFilterActive} setSortFilterActive={setSortFilterActive}/>
      </div>
      <div className="products">
        <div className="products-heading">
          <h1 className="products-title">Все пиццы</h1>
          <Search onClearSearch={onClearSearch} onSearchInput={onSearchInput} searchValue={searchValue}/>
        </div>
        <div className="products-wrapper">
          {onLoading?renderSkeleton():renderProducts()}
        </div>
      </div>
    </>
  )
}
