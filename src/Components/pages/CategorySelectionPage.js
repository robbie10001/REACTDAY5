import React, { Component } from "react";
import { Link } from "react-router-dom";

class CategorySelectionPage extends Component {    
    render() {
        const { categories } = this.props;

        return (
            <>
                <h1>What do you want to write about?</h1>
                <ul>
                    {categories.map((category, index) => {
                        return (
                            <li key={category}>
                                <Link to={`/entry/new/${index}`}>{category}</Link>
                            </li>
                        );
                    })}
                </ul>
            </>
        );
    }

    static defaultProps = {
        categories: []
    }
}

export default CategorySelectionPage;