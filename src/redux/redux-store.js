import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import friendsBarReducer from './friendsBarReducer';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsBar: friendsBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store; 

window.store = store;
