import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { Pizza } from '../redux/pizza/types';
import { CartPizza } from '../redux/cart/types';
import { usePizzaTypes } from '../redux/pizza/selectors';
import { addPizzaToCart } from '../redux/cart/slice';

const Product: React.FC<Pizza> = ({ id, title, types, sizes, price, imageUrl }) => {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSizes] = React.useState(0);
  const [addedCount, setaddedCount] = React.useState(0);

  const dispatch = useDispatch();
  const pizzaTypes: string[] = useSelector(usePizzaTypes);

  const renderTypes = () => {
    return types.map((item, index) => (
      <li
        onClick={() => setActiveType(index)}
        className={activeType === index ? 'active' : ''}
        key={index}>
        {pizzaTypes[item]}
      </li>
    ));
  };

  const renderSizes = () => {
    return sizes.map((item, index) => (
      <li
        onClick={() => setActiveSizes(index)}
        className={activeSize === index ? 'active' : ''}
        key={index}>
        {item} см.
      </li>
    ));
  };

  const isVisible = (pizzaCount: number) => {
    return pizzaCount === 0 || pizzaCount === undefined? { display: 'none' } : { display: 'flex' };
  };

  const addToCart = () => {
    setaddedCount(addedCount + 1);
    const pizzaData: CartPizza = 
    {
      id,
      title, 
      price,
      imgUrl: imageUrl,
      type: activeType,
      size: activeSize,
      count: 1
    }
    dispatch(addPizzaToCart(pizzaData));
  }

  return (
    <div className="product">
      <Link to={`${id}`} className="product-header">
        <img src={imageUrl} alt="Product Card" />
        <h3 className="product-title">{title}</h3>
      </Link>
      <div className="product-options">
        <ul>{renderTypes()}</ul>
        <ul>{renderSizes()}</ul>
      </div>
      <div className="product-footer">
        <b className="product-price">от {price} $</b>
        <div onClick={addToCart} className="action product">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2a1.2 1.2 0 0 0-2.4 0v3.6H1.2a1.2 1.2 0 0 0 0 2.4h3.6v3.6a1.2 1.2 0 0 0 2.4 0V7.2h3.6a1.2 1.2 0 0 0 0-2.4Z"
              fill="#FE5F1E"
            />
          </svg>
          <span>Добавить</span>
          <i style={isVisible(addedCount)}>{addedCount}</i>
        </div>
      </div>
    </div>
  );
}

export default Product;