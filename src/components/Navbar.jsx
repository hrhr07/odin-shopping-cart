import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>

      <Link to="/shop">Shop</Link>

      <Link to="/cart">Cart ({totalItems})</Link>
    </nav>
  );
}

export default Navbar;
