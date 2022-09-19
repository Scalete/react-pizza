import React from 'react'
import PizzaImg from '../assets/img/products/1.jpg'

export function CartProduct() {
  return (
    <div className="cart-item">
        <div className="cart-item-options">
          <div className="cart-item-info">
              <img src={PizzaImg} alt="Pizza Item" />
              <div className="cart-item-title">
                  <h3>Сырный цыпленок</h3>
                  <span>тонкое тесто, 26 см.</span>
              </div>
          </div>
          <div className="cart-item-subinfo">
            <div className="cart-item-count"><div className="round minus"></div><span>2</span><div className="round plus"></div></div>
            <div className="cart-item-price">770 $</div>
          </div>
        </div>
        <div className="round clear"></div>
    </div>
  )
}
