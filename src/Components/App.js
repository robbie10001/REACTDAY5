import React, { Component } from "react";
import CategorySelectionPage from "./pages/CategorySelectionPage";
import HomePage from "./pages/HomePage";
import NewEntryPage from "./pages/NewEntryPage";

class App extends Component {
    state = { location:"home"}

    getPage(){
        const { location } = this.state;
        switch(location) {
            case "home":
                return <HomePage />
            case "categorySelectionPage":
                return <CategorySelectionPage />; 
            case "newEntry":
                return <NewEntryPage />
            default:
                return null;
        }
    }
    render() {
        return (
            <div>
               {this.getPage()}
            </div>
        );
    }
}

export default App;