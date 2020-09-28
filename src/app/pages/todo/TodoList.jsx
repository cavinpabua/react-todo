import React  from "react";
import { connect } from "react-redux";
import { refreshList,deleteTodo,MarkCompleteItem } from "./Todo.actions";

const TodoList = ({ items, refreshList,deleteTodo,MarkCompleteItem }) => (
  <div >
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}
            <button  onClick={() => {deleteTodo(item.id)}}>Remove</button>
            <button  onClick={() => {MarkCompleteItem(item.id)}}>Mark Complete</button>
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
    deleteTodo: todo => deleteTodo(todo).then((resp) =>{
        dispatch(refreshList)
    }),
    MarkCompleteItem: todo => MarkCompleteItem(todo).then((resp) =>{
        dispatch(refreshList)
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
