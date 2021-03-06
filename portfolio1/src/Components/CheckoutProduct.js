import React from 'react'
import "../styles/style.css";
import { useStateValue } from "../store/stateProvider";

function CheckoutProduct({ id, title, price}) {
    const [{ cart }, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
        });
    };
    return (
        <React.Fragment>
            <div className="checkoutProduct">
                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{title}</p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    {/* maybe add images???? idkkkkkk */}
                    </p>
                    <button className="cart__button" onClick={removeFromCart}>
                        Remove
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CheckoutProduct;
