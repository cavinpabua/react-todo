import React from "react";
import { connect } from "react-redux";
import { refreshList,addList } from "./Item.actions";

const ItemList = ({ items, refreshList,addList }) => (
  <div>
    <button onClick={refreshList}>Refresh</button>
    <ul>
      {items.map(item => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
      <input type="text" id="new-item"></input>
      <button onClick={addList}>Add Item</button>
  </div>

);

const mapStateToProps = state => ({
  items: state.items.items
});

const mapDispatchToProps = dispatch => ({
  refreshList: () => dispatch(refreshList),
    addList: () => {
        let input_value = document.getElementById("new-item")
        dispatch(addList(input_value.value));
        input_value.value = "";
    }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
