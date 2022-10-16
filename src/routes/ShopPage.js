import Navbar from "../components/Navbar";
import { StoreContext } from "../components/Data";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

function ShopPage() {
  const { cartStore, countBoolStore } = useContext(StoreContext);
  const location = useLocation();
  const [cart, setCart] = cartStore;
  const [countBool, setCountBool] = countBoolStore;
  const { id, name, pictureAlt, pictureLink, quantity, description, price } =
    location.state;

  const addToCart = () => {
    let bool = false;
    const tempCart = cart;
    if (tempCart.length !== 0) {
      console.log(1);
      tempCart.forEach((x) => {
        console.log(2);
        if (id === x.id) {
          console.log(3);
          x.quantity = x.quantity + 1;
          bool = true;
        }
      });
      console.log(4);
      if (bool) {
        console.log(5);
        setCart(tempCart);
      } else {
        console.log(6);
        tempCart.push({
          id: id,
          name: name,
          pictureAlt: pictureAlt,
          pictureLink: pictureLink,
          quantity: quantity,
          price: price,
        });
        console.log(tempCart);
        setCart(tempCart);
        console.log(cart);
      }
    } else {
      setCart([
        {
          id: id,
          name: name,
          pictureAlt: pictureAlt,
          pictureLink: pictureLink,
          quantity: quantity,
          price: price,
        },
      ]);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="itemPageBody">
        <div className="itemPagePicture">
          <img src={pictureLink} alt={pictureAlt} />
        </div>
        <div className="itemPageDescription">
          <p>{name}</p>
          <p>Product Description</p>
          <ul>
            {description.map((z, i) => (
              <li key={id + "." + i}>{z}</li>
            ))}
          </ul>
        </div>
        <div className="itemPageCheckout">
          <p>You can add this great item to your cart down below!</p>
          <p>Price: ${price}</p>
          <button
            onClick={() => {
              addToCart();
              setCountBool(countBool ? false : true);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
