import React  from "react";
import { connect } from "react-redux";
import { refreshList,deleteTodo,MarkCompleteItem } from "./Item.actions";

const ItemList = ({ items, refreshList,deleteTodo,MarkCompleteItem }) => (
  <div onLoad={refreshList}>
    <button onClick={refreshList}>Refresh</button>
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}
            <button key={item.id} onClick={() => {deleteTodo(item.id)}}>Remove</button>
            <button key={item.id} onClick={() => {MarkCompleteItem(item.id)}}>Mark Complete</button>
        </li>
      ))}
    </ul>
  </div>

);


const mapStateToProps = state => ({
  items: state.items.items
});

const mapDispatchToProps = dispatch => ({
  refreshList: () => dispatch(refreshList),
    deleteTodo: todo => deleteTodo(todo).then(dispatch(refreshList)),
    MarkCompleteItem: todo => MarkCompleteItem(todo).then(dispatch(refreshList)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
