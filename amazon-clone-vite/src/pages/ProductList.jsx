import PropTypes from "prop-types";

const ProductList = ({ products, category }) => {
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;
  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ),
  category: PropTypes.string,
};

export default ProductList;
