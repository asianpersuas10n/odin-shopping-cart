import ShoppingCart from "./ShoppingCart";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" id="homeIconLink">
        <div className="homeIcon">Jungle</div>
      </Link>
      <ShoppingCart />
    </div>
  );
}

export default Navbar;
