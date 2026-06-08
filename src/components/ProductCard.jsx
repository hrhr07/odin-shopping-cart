import { useState } from "react";
import PropTypes from "prop-types";

function ProductCard({ id, title, image, price, description, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleQuantityChange = (event) => {
    const value = Number(event.target.value);

    if (!Number.isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    onAddToCart({
      id,
      title,
      image,
      price,
      quantity,
    });
  };

  return (
    <article className="product-card">
      <img src={image} alt={title} className="product-image" />

      <h2>{title}</h2>

      <p className="price">${price.toFixed(2)}</p>

      <p>{description}</p>

      <div className="quantity-controls">
        <button type="button" onClick={handleDecrement}>
          -
        </button>

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />

        <button type="button" onClick={handleIncrement}>
          +
        </button>
      </div>

      <button
        type="button"
        className="add-to-cart-btn"
        onClick={handleAddToCart}
      >
        Add To Cart
      </button>
    </article>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;
