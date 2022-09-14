import React from 'react';
import PizzaImg from '../assets/img/products/1.jpg';

export function Product({ title, types, sizes, price }) {
  const pizzaTypes = ['тонкое', 'традиционное'];
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSizes] = React.useState(0);
  const [pizzaCount, setPizzaCount] = React.useState(0);

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

  const isVisible = () => {
    return pizzaCount === 0 ? { display: 'none' } : { display: 'flex' };
  };

  return (
    <div className="product">
      <img src={PizzaImg} alt="Product Card" />
      <h3 className="product-title">{title}</h3>
      <div className="product-options">
        <ul>{renderTypes()}</ul>
        <ul>{renderSizes()}</ul>
      </div>
      <div className="product-footer">
        <b className="product-price">от {price} $</b>
        <div onClick={() => setPizzaCount(pizzaCount + 1)} className="action product">
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
          <i style={isVisible()}>{pizzaCount}</i>
        </div>
      </div>
    </div>
  );
}
