import React, { Component } from 'react';
import './App.css';

class App extends Component {
  validateName = name => name.length > 6
  handleFormSubmit = e => {
    // preventDefault para prevenir el submit del formulario y poder ejecutar codigo propio
    e.preventDefault()

    // 1. 1ra forma de recuperar el valor del input -> usando target por posicion
    console.log('by target position', e.target[0].value)

    // 2. 2da forma de recuperar el valor del input -> usando NAME
    console.log('by name', e.target.elements.username.value)

    // 3. 3ra forma de recuperar el valor del input -> usando REF
    console.log('by ref', this.userNameNode.value)

    const userName = this.userNameNode.value
    this.validateName(userName)
      ? alert('name ok')
      : alert('name should be at least 5 chars')
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>{`Name:`}</label>
        <input name='username' type="text" ref={node => (this.userNameNode = node)}/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default App;
