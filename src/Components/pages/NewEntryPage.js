import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewEntryPage extends Component {
    render() {
        return(
            <Link to="/entry">
            <h1>NewEntryPage</h1>
            </Link>
        );
    }
}

export default NewEntryPage;