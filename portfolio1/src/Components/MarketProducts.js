import React from "react";
import "../styles/style.css";
import { useStateValue } from "../store/stateProvider";

function MarketProducts({ title, price }) {
  const [{ cart }, dispatch] = useStateValue();
  const addToCart = () => {
    // sending the item to the State Provider (CONTEXT API)
    dispatch({
      type: "ADD_TO_CART",
      item: {
        title: title,
        price: price
      }
    });
  };
  return (
    <React.Fragment>
      <div>
        <div className="product">
          <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
          </div>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MarketProducts;
