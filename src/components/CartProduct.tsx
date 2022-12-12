import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { addPizzaToCart, minusPizza, removePizza } from '../redux/cart/slice';
import { usePizza } from '../redux/pizza/selectors';
import { Pizza } from '../redux/pizza/types'

type ICartProductProps = {
  id: number;
  title?: string;
  price: number;
  imgUrl: string;
  type: number;
  size: number;
  count: number;
};

interface IPizzaData {
  pizzasData: Pizza[];
  pizzaTypes: string[];
}

const CartProduct: React.FC<ICartProductProps> = ({id, title, price, imgUrl, type, size, count}) => {

  const {pizzasData, pizzaTypes}: IPizzaData = useSelector(usePizza);
  const dispatch = useDispatch();

  const disableBtn: () => React.CSSProperties = () => {
    return count === 1?{pointerEvents: 'none', opacity: '0.4'}:{};
  }

  return (
    <div className="cart-item">
        <div className="cart-item-options">
          <div className="cart-item-info">
              <img src={imgUrl} alt="Pizza Item" />
              <div className="cart-item-title">
                  <h3>{title}</h3>
                  <span>{pizzaTypes[type]}, {pizzasData.filter(item => item.id === id).pop()?.sizes[size]} см.</span>
              </div>
          </div>
          <div className="cart-item-subinfo">
            <div className="cart-item-count"><button style={disableBtn()} onClick={() => dispatch(minusPizza({id, type, size}))} className="round minus"></button><span>{count}</span><button onClick={() => dispatch(addPizzaToCart({id, title, price, imgUrl, type, size, count}))} className="round plus"></button></div>
            <div className="cart-item-price">{price * count} $</div>
          </div>
        </div>
        <button onClick={() => dispatch(removePizza({id, type, size}))} className="round clear"></button>
    </div>
  )
}

export default CartProduct;