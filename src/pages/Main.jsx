import React from 'react'
import { Category } from '../components/Filter/Category';
import { Search } from '../components/Filter/Search';
import { Sort } from '../components/Filter/Sort';
import { Product } from '../components/Product';

export function Main() {
  return (
    <>
      <div className="filters">
          <Category/>
          <Sort/>
      </div>
      <div className="products">
        <div className="products-heading">
          <h1 className="products-title">Все пиццы</h1>
          <Search/>
        </div>
        <div className="products-wrapper">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
      </div>
    </>
  )
}
