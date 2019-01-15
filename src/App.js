import React, { Component } from "react";
import List from "./components/list2";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [{ id: 0, todo: "Comprar coca", categoria: "turbio" }]
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem() {}
  render() {
    return (
      <div className="App">
        <input type="text" />
        <button onClick={this.addItem}>Add</button>
        <List todoItems={this.state.todoItems} />
      </div>
    );
  }
}

export default App;
