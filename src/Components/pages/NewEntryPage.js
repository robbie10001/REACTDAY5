import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewEntryPage extends Component {
    state = { errorMessage: "", category: null }
    
    componentDidMount() {
        const { id } = this.props.match.params;
        const { categories } = this.props;

        if (!categories[id]) {
            return this.setState({ errorMessage: "Invalid Category"});
        }

        return this.setState({ category: categories[id] });
    }
    
    render() {
        const { errorMessage, category } = this.state;

        return (
            <>
            {errorMessage}
            { category && 
                <>
                    <h1>New {category} entry</h1>
                    
                    <div>
                        <Link to="/category"><button>Back</button></Link>
                    </div>
                </>
                }
            </>
        );
    }
}

export default NewEntryPage;