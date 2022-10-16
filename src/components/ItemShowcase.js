import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../components/Data";

function ItemShowcase() {
  const { linksStore } = useContext(StoreContext);
  const [links] = linksStore;
  return (
    <div>
      <div id="shopContainer">
        {links.map((link) => {
          return (
            <div className="shopItem">
              <Link
                className="link"
                to="/shop-item"
                state={{
                  id: link.id,
                  name: link.name,
                  pictureLink: link.pictureLink,
                  pictureAlt: link.pictureAlt,
                  price: link.price,
                  description: link.description,
                  quantity: 1,
                }}
              >
                <div className="itemBorder">
                  <img src={link.pictureLink} alt={link.pictureAlt} />
                  <p className="itemNameContainer">{link.name}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ItemShowcase;
