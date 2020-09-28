import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import ItemList from "./app/pages/todo/TodoList";
import ItemForm from "./app/pages/todo/TodoForm";
import items from "./app/pages/todo/Todo.reducers";

// Setup Redux store with Thunks
const reducers = combineReducers({ items });
const store = createStore(reducers, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <ItemList />
    <ItemForm />
  </Provider>
);

export default App;
