import React, {Component} from "react";

class EntryForm extends Component {
    state = { entry: "", errorMessage: null }

    onTextareaChange = (event) => {
        this.setState({ entry: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const { onEntryFormSubmit, category, history } = this.props;
        const { entry } = this.state;

        if (!entry) {
            return this.setState({ errorMessage: "Cannot be blank" });
        }

        onEntryFormSubmit({ category, entry });
        this.setState({ entry: "", errorMessage: null});
        history.push("/");
    }

    render() {
        const { entry, errorMessage } = this.state;

        return(
            <form onSubmit={this.onFormSubmit}>
                {errorMessage}
                <div>
                    <textarea onChange={this.onTextareaChange} value={entry}></textarea>
                </div>
                <input type="submit" value="create entry" />
            </form>
        )
    }
}

export default EntryForm;