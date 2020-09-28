import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import StorageList from "./app/pages/localstorage/StorageList";
import StorageForm from "./app/pages/localstorage/StorageForm";
import items from "./app/pages/localstorage/Storage.reducers";

// Setup Redux store with Thunks
const reducers = combineReducers({ items });
const store = createStore(reducers, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <StorageList />
    <StorageForm />
  </Provider>
);

export default App;
