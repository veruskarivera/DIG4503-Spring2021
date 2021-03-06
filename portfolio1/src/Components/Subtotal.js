import React, { useEffect } from "react";
import "../styles/style.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../store/stateProvider";
import { getCartTotal } from "../store/reducer";

function Subtotal() {
    const [{ cart }, dispatch] = useStateValue();
    useEffect(() => {
        console.log("getCartTotal(cart): " + getCartTotal(cart));
    });

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={value => (
                    <>
                        <p>
                            Number of Items ({cart.length})<strong> Total {value}</strong>
                        </p>
                      
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <div className="button__wrapper">
                <button className="pay__button">Pay Now</button>
            </div>
        </div>
    );
}

export default Subtotal;
