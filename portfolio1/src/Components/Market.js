import React from "react";
import MarketProducts from "../Components/MarketProducts";
import "../styles/style.css";

function Market() {
  return (
    <React.Fragment>
      <div className="market">
        <div className="market-container">
          <div className="product-row">
            <MarketProducts  title={`Item 1`} price={114.99} />
            <MarketProducts title={"Item 2"} price={102.99} />
            <MarketProducts  title={"Item 3"} price={94.99} />
          </div>

          <div className="product-row">
            <MarketProducts  title={"Item 4"} price={79.99} />
            <MarketProducts title={"Item 5"} price={9.99} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Market;
