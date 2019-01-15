import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.sumarValorAContador = this.sumarValorAContador.bind(this)
  }

  sumarValorAContador(){
    // const valor = this.props.valor
    const {valor} = this.props 
    const {counter}=this.state 
    const nuevoValorContador = counter + valor // 40
    this.setState({ counter: nuevoValorContador }) // 40

    this.functionConParam(nuevoValorContador)
  }

  functionConParam(param){
    console.log("ESTE ES EL PARAM", param)
  }
  
  render() {
    const {counter} = this.state
    const {valor} = this.props

    console.log(this.props)

    return (
      <div>
        <p>El valor del contador es: {counter}</p>
        <button onClick={this.sumarValorAContador}>{valor}</button>
      </div>
    );
  }
}
export default Counter;
