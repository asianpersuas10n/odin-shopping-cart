import { useContext } from "react";
import { StoreContext } from "./Data";

function ShoppingCartItems() {
  const { cartStore } = useContext(StoreContext);
  const [cart] = cartStore;
  return (
    <div>
      <div className="cartItems">
        <span>Item:</span>
        <span>Quantity:</span>
      </div>
      {cart.map((item, i) => {
        return (
          <div className="cartItems" key={i}>
            <div className="cartItemContainer">
              <img src={item.pictureLink} alt={item.pictureAlt} />
              <div>{item.name}</div>
            </div>
            <div className="quantity">{item.quantity}</div>
          </div>
        );
      })}
    </div>
  );
}
export default ShoppingCartItems;
