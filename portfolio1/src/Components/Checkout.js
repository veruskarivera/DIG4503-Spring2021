import React from "react";
import CheckoutProduct from "../Components/CheckoutProduct";
import Subtotal from "../Components/Subtotal";
import "../styles/style.css";
import { useStateValue } from "../store/stateProvider";

function Checkout() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <React.Fragment>
      <div className="checkout__left">
        <div>
          <h3> Hello </h3>
          <h5 className="checkout__title">Your Shopping Cart</h5>
          {cart.map(item => (
            <CheckoutProduct title={item.title} price={item.price} />
          ))}
        </div>
      </div>

      <div>
        <Subtotal />
      </div>
    </React.Fragment>
  );
}

export default Checkout;
