import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ShoppingCartIcon } from "../images/shoppingCart.svg";
import ShoppingCartItems from "./ShoppingCartItems";
import { StoreContext } from "../components/Data";
import { useContext } from "react";

function ShoppingCart() {
  const { cartStore, countBoolStore, totalStore } = useContext(StoreContext);
  const [total, setTotal] = totalStore;
  const [countBool] = countBoolStore;
  const [cart] = cartStore;
  const [cartBool, setCartBool] = useState(false);
  const [howMany, setHowMany] = useState(0);

  useEffect(() => {
    let count = 0;
    let tempTotal = 0;
    const tempCart2 = cart;

    tempCart2.forEach((items) => {
      tempTotal = tempTotal + items.price * items.quantity;
      count = count + items.quantity;
    });
    setTotal(String(Number.parseFloat(tempTotal).toFixed(2)));
    setHowMany(count);
  }, [cart, countBool, setTotal]);

  return (
    <div
      id="cart"
      name="cart"
      onMouseEnter={() => {
        setCartBool(true);
      }}
      onMouseLeave={() => {
        setCartBool(false);
      }}
    >
      <Link id="cartIconLink" to="/shopping-cart">
        <ShoppingCartIcon id="shoppingCartIcon" />
        <div id="cartNumber">{howMany}</div>
      </Link>
      {cartBool && (
        <div className="cartContainer">
          <ShoppingCartItems />
          <div id="cartBottom">
            <div className="cartTotal">Total: ${total}</div>
            <Link to="/shopping-cart">
              <button className="cartButton" name="checkOut">
                Check Out
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
