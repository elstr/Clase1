import React, { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   options: props.filter.options,
    //   showOptions: false,
    options: [],
    };
  }
  setOptionsToShow(filter) {
    this.setState({
      options: filter.options
    // showOptions: true
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setOptionsToShow(this.props.filter)}>
          {this.props.filter.name}
        </button>
        {this.state.options.map((option, index) => {
          return (
            <div key={index}>
              <input type="checkbox" value={option} />
              <span>{option}</span>
            </div>
            // <div key={index} className={showOptions ? "show" : "hide"}>
            //   <input type="checkbox" value={option} />
            //   <span>{option}</span>
            // </div>
          );
        })}
      </div>
    );
  }
}

export default Filter;
