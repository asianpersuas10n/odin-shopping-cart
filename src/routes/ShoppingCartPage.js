import { useContext } from "react";
import { StoreContext } from "../components/Data";
import Navbar from "../components/Navbar";

function ShoppingCartPage() {
  const { cartStore, totalStore } = useContext(StoreContext);
  const [total] = totalStore;
  const [cart] = cartStore;
  return (
    <div>
      <Navbar />
      <div className="shoppingCartBody">
        <div className="shoppingCartContainer">
          <p>Items in your cart:</p>
          <div className="shoppingCartItems">
            {cart.map((item, i) => {
              return (
                <div className="cartItems" key={i}>
                  <div className="cartItemContainer">
                    <img src={item.pictureLink} alt={item.pictureAlt} />
                    <div>{item.name}</div>
                  </div>
                  <div>{"$" + item.price * item.quantity}</div>
                  <div className="quantity">{item.quantity}</div>
                </div>
              );
            })}
          </div>
          <div className="shoppingCartFooter">
            <div className="shoppingCartTotal">Total: ${total}</div>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <button className="shoppingCartCheckout">Check Out</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
