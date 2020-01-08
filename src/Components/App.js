import React, { Component } from "react";
import CategorySelectionPage from "./pages/CategorySelectionPage";
import HomePage from "./pages/HomePage";
import NewEntryPage from "./pages/NewEntryPage";
import { BrowserRouter, Route, Link} from "react-router-dom";

class App extends Component {

//<BrowserRouter> creates it own internal history. It sort of watches our address bar. 
//<Route exact path="/category" component={CategorySelectionPage} /> When a route matches its path, it renders!
//It is basically looking for a match.
    render() {
        return (
            <div>
                <BrowserRouter>
                <>
                    <Link to="/">Home</Link>
                    <Link to="/category">New Categories</Link>
                    <Link to="/entry">Entries</Link>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/category" component={CategorySelectionPage} />
                    <Route exact path="/entry" component={NewEntryPage} />
                </>
               </BrowserRouter>
            </div>
        );
    }
}

export default App;