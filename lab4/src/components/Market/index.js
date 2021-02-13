import React from "react";
import MarketItem from "../MarketItem";

class Market extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  render() {
    return (
      <div>
        <h3>CLICK TO ADD ITEMS</h3>
        <button
          onClick={() => {
            const items = this.state.items;
            items.push(<MarketItem count={items.length} />);
            this.setState({ items: items });
          }}
        >
          {" "}
          Click here, now!
        </button>
        <div>
          {this.state.items.map((count, key) => {
            return <div key={key}>{count}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default Market;
