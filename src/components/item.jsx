import React from "react";

// este componente tmp tiene state
const Item = props => {
  return (
    <div>
      <p>Todo: {props.item}</p>
    </div>
  );
};

export default Item;
