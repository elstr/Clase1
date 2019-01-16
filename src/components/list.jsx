import React from "react";
import Item from "./item";

const List = props => {
  return (
    <div>
        {props.todos.map((item, index) => {
            return <Item key={`key-${index}`} item={item} />
        })}
    </div>
  );
};

export default List;
