import PropTypes from "prop-types";
import "./CategoryItem.css";
const CategoryItem = ({ category }) => {
  return (
    <>
      <li className="category-item">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">
          <img
            src={category.img}
            alt={category.name}
            className="category-image"
          />
          <span className="category-title">{category.name.toUpperCase()}</span>
        </a>
      </li>
    </>
  );
};

export default CategoryItem;

CategoryItem.propTypes = {
  category: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
