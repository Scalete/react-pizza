import React from 'react'

export function Category() {
  return (
    <div className="category">
      <div className="category-title category-item">Все <svg className="" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 5a.6.6 0 0 1-.186.44.6.6 0 0 1-.439.185H.625a.6.6 0 0 1-.44-.186A.6.6 0 0 1 0 5a.6.6 0 0 1 .186-.44L4.56.187A.6.6 0 0 1 5 0a.6.6 0 0 1 .44.186L9.813 4.56A.6.6 0 0 1 10 5Z" fill="#2C2C2C"/></svg></div>
      <ul className="category-list">
            <li className="category-item active">Все</li>
            <li className="category-item">Мясные</li>
            <li className="category-item">Вегетарианская</li>
            <li className="category-item">Гриль</li>
            <li className="category-item">Острые</li>
            <li className="category-item">Закрытые</li>
        </ul>
    </div>
    
  )
}
