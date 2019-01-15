import React, { Component } from "react";
import List from "./components/list";

class App extends Component {
  constructor() {
    super();
    this.state = {
      flag: true,
      todoItems: [{ id: 0, todo: "Comprar coca", categoria: "turbio" }]
    };
    // this.addItem = this.addItem.bind(this);
    this.llegueAlBoton = this.llegueAlBoton.bind(this);
  }
  // addItem() {}

  llegueAlBoton() {
    console.log("Llegue al boton");
    console.log("This -", this);
    this.setState({ flag: false });
  }

  render() {
    return (
      <div className="App">
        <input type="text" />

        <button onClick={this.llegueAlBoton}>PRIMER BOTON</button>
        <button onClick={() => this.llegueAlBoton2()}>SEGUNDO BOTON</button>

        {/* <button onClick={this.addItem.}>Add</button>
        <List todoItems={this.state.todoItems} /> */}
      </div>
    );
  }
}

export default App;
