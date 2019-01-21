import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CiclosDeVida extends Component {
    constructor(props) {
        super(props);
        console.log("constructor")
    }

    componentWillMount() {
        console.log("componentWillMount")
    }

    componentDidMount() {
         console.log("componentDidMount")
    }

    componentWillReceiveProps(nextProps) {
         console.log("componentWillReceiveProps")
         console.log("nextProps", nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
         console.log("shouldComponentUpdate")
         console.log("nextProps", nextProps)
         return false
    }

    componentWillUpdate(nextProps, nextState) {
         console.log("componentWillUpdate")
         console.log("nextProps", nextProps)
    }

    componentDidUpdate(prevProps, prevState) {
         console.log("componentDidUpdate")
         console.log("prevProps", prevProps)
    }

    componentWillUnmount() {
         console.log("componentWillUnmount")
    }

    render() {
        console.log("render")
        return (
            <div>
                <p>ciclo de vida</p>
                <p>{this.props.valorDeLaProp}</p>
            </div>
        );
    }
}

CiclosDeVida.propTypes = {

};

export default CiclosDeVida;