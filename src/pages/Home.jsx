import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <h1>Odin Shop</h1>

      <p>Discover great products, manage your cart.</p>

      <Link to="/shop" className="add-to-cart-btn">
        Start Shopping
      </Link>
    </div>
  );
}

export default Home;
