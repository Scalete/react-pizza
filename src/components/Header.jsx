import React from 'react'
import Logo from '../assets/icons/logo.png'

export function Header() {
  return (
    <header className="header">
        <div className="header-wrapper">
            <div className="header-logo">
                <img src={Logo} alt="Logo" />
                <div className="header-content">
                  <h2 className="title">REACT PIZZA</h2>
                  <span>самая вкусная пицца во вселенной</span>
                </div>
            </div>
            <div className="header-cart">
              <a className="action cart" href="#">
                <span className="price">500 $</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.333 16.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666ZM14.333 16.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666ZM4.78 5h11.553l-1.12 5.593a1.334 1.334 0 0 1-1.333 1.074H6.833a1.334 1.334 0 0 1-1.333-1.16l-1.013-7.68a1.333 1.333 0 0 0-1.32-1.16h-1.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="count">3</span>
              </a>
            </div>
        </div>
    </header>
  )
}