import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const cartJson = localStorage.getItem("cart");
  const [cart, setCart] = useState(JSON.parse(cartJson) || []);

  const state = { cart, setCart };

  return (
    <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
  );
};

ProductContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ProductContextProvider;
