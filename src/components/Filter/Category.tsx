import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCategoryId } from '../../redux/filter/selectors';
import { setCategoryId } from '../../redux/filter/slice';

const Category: React.FC = React.memo(() => {

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [activeMobileCategory, setActiveMobileCategory] = React.useState<boolean>(false);

  const categoryId: number = useSelector(useCategoryId);
  const dispatch = useDispatch();

  const renderCategories = () => {
    return categories.map((item, index) => (
      <li
        key={index}
        onClick={() => onClickCategory(index)}
        className={'category-item ' + (categoryId === index ? 'active' : '')}>
        {item}
      </li>
    ));
  };

  const onClickCategory = (index: number) => {
    dispatch(setCategoryId(index));
    setActiveMobileCategory(false);
  };

  return (
    <div className="category">
      <div
        onClick={() => setActiveMobileCategory(!activeMobileCategory)}
        className="category-title category-item">
        {categories[categoryId]}{' '}
        <svg
          className={activeMobileCategory ? 'active' : ''}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5a.6.6 0 0 1-.186.44.6.6 0 0 1-.439.185H.625a.6.6 0 0 1-.44-.186A.6.6 0 0 1 0 5a.6.6 0 0 1 .186-.44L4.56.187A.6.6 0 0 1 5 0a.6.6 0 0 1 .44.186L9.813 4.56A.6.6 0 0 1 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
      </div>
      <ul className={'category-list ' + (activeMobileCategory ? 'active' : '')}>
        {renderCategories()}
      </ul>
    </div>
  );
});

export default Category;