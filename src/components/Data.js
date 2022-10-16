import { useState, createContext } from "react";
import fungusAmongus from "../images/fungusAmongus.png";
import jarOfDirt from "../images/jarOfDirt.png";
export const StoreContext = createContext(null);

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState(0);
  const [cart, setCart] = useState([]);
  const [countBool, setCountBool] = useState(true);
  const [total, setTotal] = useState("0.00");
  const links = [
    {
      id: 1,
      name: "Jar of Dirt",
      pictureLink: jarOfDirt,
      pictureAlt: "Jar of Dirt",
      price: 14.99,
      description: [
        "- Its literraly a jar of dirt.",
        "- It was probably in 'The Pirates of the Caribbean'",
        "- Might have other jungle like things in it",
      ],
      quantity: 1,
    },
    {
      id: 2,
      name: "Fungus Shaped Like Amongus",
      pictureLink: fungusAmongus,
      pictureAlt:
        "Fungus that looks like the videogame cartoon character Amongus",
      price: 49.99,
      description: ["- sus", "- ඞ"],
      quantity: 1,
    },
  ];

  const store = {
    cartStore: [cart, setCart],
    itemsInCartStore: [itemsInCart, setItemsInCart],
    countBoolStore: [countBool, setCountBool],
    totalStore: [total, setTotal],
    linksStore: [links],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
