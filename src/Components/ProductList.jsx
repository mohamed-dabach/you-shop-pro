import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductList = ({ list }) => {
  return (
    <ul className="grid grid-cols-2 max-[500px]:grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
      {list &&
        list.map((item) => {
          return <ItemProduct key={item.id} product={item} />;
        })}
    </ul>
  );
};

const ItemProduct = ({ product }) => {
  return (
    <li className="p-1 border text-center">
      <Link to="#">
        <img
          src={product.img}
          className="max-w-full w-full "
          alt={product.name}
        />
        <div className="">
          <p>{product.category}</p>
          <h3 className="text-secondary">{product.name}</h3>
          <p>${product.price}</p>
        </div>
      </Link>
    </li>
  );
};

ItemProduct.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
};

ProductList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.string,
    })
  ),
};

export default ProductList;
