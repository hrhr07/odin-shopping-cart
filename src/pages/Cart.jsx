import { useCart } from "../context/CartContext.jsx";

function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cartItems.map((item) => (
        <article key={item.id}>
          <img src={item.image} alt={item.title} />

          <div>
            <h2>{item.title}</h2>

            <p>${item.price.toFixed(2)}</p>

            <p>Quantity: {item.quantity}</p>

            <div className="quantity-controls">
              <button type="button" onClick={() => decreaseQuantity(item.id)}>
                -
              </button>

              <button type="button" onClick={() => increaseQuantity(item.id)}>
                +
              </button>

              <button type="button" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        </article>
      ))}

      <h2>Total: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
}

export default Cart;
