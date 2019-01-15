import React, { Component } from "react";

class CounterConProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      counter: 0
    };
    this.addCounter = this.addCounter.bind(this);
  }
  addCounter() {
    const { counter, value } = this.state;
    this.setState({ counter: counter + value });
  }
  render() {
    return (
      <div>
        <label>Counter value: {this.state.counter}</label>
        <button onClick={this.addCounter}>+{this.state.value}</button>
      </div>
    );
  }
}

export default CounterConProps;
