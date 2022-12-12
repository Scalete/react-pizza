import React from 'react';
import CartProduct from '../components/CartProduct';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import EmptyCart from '../components/EmptyCart';
import { selectCart } from '../redux/cart/selectors';
import { clearCart } from '../redux/cart/slice';

export function Cart() {

  const pizzasData = useSelector(selectCart);
  const dispatch = useDispatch();

  const renderCartProducts = () => {
    return pizzasData.map((item, i) => <CartProduct key={i} {...item}/>);
  }

  const countAllPrice = () => {
    return pizzasData.reduce((sum, item) => sum + (item.price * item.count), 0);
  }

  const countAllCount = () => {
    return pizzasData.reduce((sum, item) => sum + item.count, 0);
  }

  return (
    <div className="cart">

      {
        !pizzasData.length?<EmptyCart />: 
          <>
          <div className="cart-header">
            <div className="cart-title">
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.667 28.792a2.417 2.417 0 1 0 0-4.834 2.417 2.417 0 0 0 0 4.834ZM25.167 28.792a2.417 2.417 0 1 0 0-4.834 2.417 2.417 0 0 0 0 4.834ZM7.851 8.25h20.94l-2.03 10.138a2.417 2.417 0 0 1-2.416 1.945H11.573a2.417 2.417 0 0 1-2.417-2.102L7.32 4.31a2.417 2.417 0 0 0-2.392-2.103H2.208"
                  stroke="#3F3F3F"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h1>Корзина</h1>
            </div>
            <button className="cart-clear" onClick={() => dispatch(clearCart())}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.5 5h15M6.667 5V3.333a1.667 1.667 0 0 1 1.666-1.666h3.334a1.666 1.666 0 0 1 1.666 1.666V5m2.5 0v11.667a1.667 1.667 0 0 1-1.666 1.666H5.833a1.667 1.667 0 0 1-1.666-1.666V5h11.666ZM8.333 9.167v5M11.667 9.167v5"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Очистить корзину</span>
            </button>
          </div>
          <div className="cart-products">
            {renderCartProducts()}
          </div>
          <div className="cart-total">
            <div className="cart-count">
              Всего пицц: <b>{countAllCount()} шт.</b>
            </div>
            <div className="cart-price">
              Сумма заказа: <b>{countAllPrice()} $</b>
            </div>
          </div>
          <div className="cart-actions">
            <Link to="/react-pizza" className="action product">Вернуться назад</Link>
            <button className="action cart">Оплатить сейчас</button>
          </div>
          </>
      }
      
    </div>
  );
}
