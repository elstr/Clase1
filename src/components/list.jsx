import React from "react";
import Item from "./item";
const List = props => {
  return (
    <div>
        {props.todoItems.map((item, index) => {
            return <Item key={index} item={item} />
        })}
    </div>
  );
};

export default List;
