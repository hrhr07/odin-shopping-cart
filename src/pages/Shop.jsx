import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard.jsx";
import { useCart } from "../context/CartContext.jsx";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>Shop Page</h1>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            description={product.description}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
