import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CategorySelectionPage extends Component {
    render() {
        const categories = ['personal', 'travel', 'dating'];

        return(
            <>
                <h1>What do you want to write about?</h1>
                <ul>
                    {categories.map((category, index) => {
                        return (
                            <li key={category}>
                                <Link to='/entry'>{category}</Link>
                            </li>
                        )
                    })}
                </ul>
            </>
        );
    }
}

export default CategorySelectionPage;