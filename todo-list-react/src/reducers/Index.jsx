import ToDoReducer from "./ToDoReducer";
import {createStore, combineReducers} from 'redux';

const reducers = combineReducers({todo: ToDoReducer});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;