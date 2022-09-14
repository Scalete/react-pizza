import React from 'react'

export function Category({onClickCategory, activeCategory}) {
  
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [activeMobileCategory, setActiveMobileCategory] = React.useState(false);

  const renderCategories = () => {
    return categories.map((item, index) => <li key={index}
                                              onClick={() => onClickCategory(index, setActiveMobileCategory)} 
                                              className={'category-item ' + (activeCategory===index?'active':'')}>{item}</li>);
  }

  return (
    <div className="category">
      <div onClick={() => setActiveMobileCategory(!activeMobileCategory)} className="category-title category-item">{categories[activeCategory]} <svg className={activeMobileCategory?'active':''} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 5a.6.6 0 0 1-.186.44.6.6 0 0 1-.439.185H.625a.6.6 0 0 1-.44-.186A.6.6 0 0 1 0 5a.6.6 0 0 1 .186-.44L4.56.187A.6.6 0 0 1 5 0a.6.6 0 0 1 .44.186L9.813 4.56A.6.6 0 0 1 10 5Z" fill="#2C2C2C"/></svg></div>
      <ul className={"category-list " + (activeMobileCategory?'active':'')}>
        {renderCategories()}
        </ul>
    </div>
    
  )
}
