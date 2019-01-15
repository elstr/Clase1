import React, { Component } from 'react';
import Filter from "./filter"

const customFilters = [
    {name: "Category", options: ["Novel", "Fantasy"]}, // index 0
    {name: "Author", options: ["G. G. Martin", "Brandon Sanderson", "Isabel Allende", "J. K. Rowling"]}, // index 1
    {name: "Users", options: ["Juan", "Lele", "TODO ES DINAMICO"]}, // index 1
]

class Sidebar extends Component {
    render() {
        return (
            customFilters.map((filter, index) => {
             return <Filter key={`filter-${index}`} filter={filter} />
          })
        );
    }
}

export default Sidebar;