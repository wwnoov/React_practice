import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixNumber: 6,
  };
  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>{this.state.fixNumber}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
