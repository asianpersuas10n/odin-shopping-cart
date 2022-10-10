import { useState } from "react";
import { ReactComponent as ShoppingCartIcon } from "../images/shoppingCart.svg";

function ShoppingCart() {
  const [cartBool, setCartBool] = useState(false);

  return (
    <div
      name="cart"
      onMouseEnter={() => {
        setCartBool(true);
      }}
      onMouseLeave={() => {
        setCartBool(false);
      }}
    >
      <ShoppingCartIcon id="shoppingCartIcon" />
      {cartBool && (
        <div className="cartContainer">
          <div className="cartItems"></div>
          <button className="cartButton">Check Out</button>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
