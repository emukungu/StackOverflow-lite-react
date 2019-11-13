//The store is the object that brings together the actions and reducers

import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";

const configureStore = () => {
    return createStore(
        rootReducer, 
        applyMiddleware(thunk)
    );
};

export default  configureStore;