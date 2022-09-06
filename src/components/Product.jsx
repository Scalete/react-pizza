import React from 'react'
import PizzaImg from '../assets/img/products/1.jpg';

export function Product() {
  return (
    <div className="product">
        <img src={PizzaImg} alt="Product Card" />
        <h3 className="product-title">Чизбургер-пицца</h3>
        <div className="product-options">
            <ul>
                <li>тонкое</li>
                <li>традиционное</li>
            </ul>
            <ul>
                <li>26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
            </ul>
        </div>
        <div className="product-footer">
            <b className="product-price">от 395 $</b>
            <div className="action product"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8 4.8H7.2V1.2a1.2 1.2 0 0 0-2.4 0v3.6H1.2a1.2 1.2 0 0 0 0 2.4h3.6v3.6a1.2 1.2 0 0 0 2.4 0V7.2h3.6a1.2 1.2 0 0 0 0-2.4Z" fill="#FE5F1E"/></svg>
                <span>Добавить</span>
                <i>2</i>
            </div>
        </div>
    </div>
  )
}
