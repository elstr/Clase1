  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.addCounter = this.addCounter.bind(this)
  }
  addCounter() {
    console.log("llego")
    const { counter } = this.state;
    console.log(this.state)
    this.setState({ counter: counter + 1 });
  }
  render() {
    return (
      <div>
        <label>Counter value: {this.state.counter}</label>
        <button onClick={this.addCounter}>+1</button>
      </div>
    );
  }