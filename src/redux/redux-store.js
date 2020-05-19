import { createStore, combineReducers } from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import friendsBarReducer from './friendsBarReducer';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsBar: friendsBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});


let store = createStore(reducers);

export default store; 

window.store = store;
