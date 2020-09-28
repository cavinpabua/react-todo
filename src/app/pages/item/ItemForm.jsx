import React, { Component } from "react";
import { connect } from "react-redux";
import { refreshList,addList } from "./Item.actions";

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { text } = this.state;
        this.props.addList({ text });
        this.setState({ text: "" });
    }

    render() {
        const { text } = this.state;
        return (
            <div>
                <input
                    type="text"
                    id="text"
                    value={text}
                    placeholder="Todo"
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>Add Item</button>
            </div>
        )

    }
}



const mapDispatchToProps = dispatch => ({
    addList: text => addList(text).then(dispatch(refreshList))
});

const FormList =  connect(
    null,
    mapDispatchToProps
)(ItemList);

export default FormList;