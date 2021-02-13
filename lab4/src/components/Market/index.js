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
          {this.state.items.map(function(count, key) {
            return <p key={key}>{count}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default Market;
