import React, { Component } from "react";
import CategorySelectionPage from "./pages/CategorySelectionPage";
import HomePage from "./pages/HomePage";
import NewEntryPage from "./pages/NewEntryPage";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
    state = { 
        categories: ["personal", "travel", "dating"],
        entries: []
    }

    onEntryFormSubmit = (entry) => {
        this.setState((state, props) => {
            return { entries: [...state.entries, entry] };
        });
    }
    
    render() {
        const { categories } = this.state;
        
        return (
            <div>
                <BrowserRouter>
                    <>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/category" render={(props) => {
                            return <CategorySelectionPage {...props} categories={categories} />
                        }} />
                        <Route exact path="/entry/new/:id" render={(props) => {
                            return (
                                <NewEntryPage 
                                    {...props} 
                                    categories={categories} 
                                    onEntryFormSubmit={this.onEntryFormSubmit} 
                                />
                            )
                        }} />
                    </>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
