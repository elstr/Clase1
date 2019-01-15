import React from "react";

const Item = props => {
  return (
    <div>
        <p>{props.item.categoria}</p>
        <p>{props.item.todo}</p>
    </div>
  );
};

export default Item;
