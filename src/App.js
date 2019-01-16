import React, { Component } from "react";
import List from "./components/list";

// SMART COMPONENTS = COMPONENTES PIOLAS = CONTAINERS
// ESTOS SI TIENEN LOGICA
// Llaman a componentes bobos(dumb)

class App extends Component {
  constructor() {
    super(); // siempre dentro del constructor llamo a super()
    this.state = {
      newTodo: "",
      todos: ["Comprar Coca"]
    };
  }
  addItem() {
    // console.log("AGREGAMOS EL ITEM - AHRE");
    // this.state.todos.push(this.state.newTodo);
    // Cuando trabajo con objetos -> Creo un objeto nuevo
    // Cuando trabajo con arrays -> Creo un array nuevo

    // Concat: agarro el array que quiero modificar
    // y entre () le paso el elemento que quiero agregar a ese array
    // const newTodos = this.state.todos.concat(this.state.newTodo);

    // ... = Spread
    const { newTodo, todos } = this.state;
    const newTodos = [newTodo, ...todos];
    this.setState({
      todos: newTodos
    });
  }
  handleInputChange(event) {
    this.setState({ newTodo: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <input type="text" onChange={event => this.handleInputChange(event)} />
        <button onClick={() => this.addItem()}>Add</button>
        <List todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
