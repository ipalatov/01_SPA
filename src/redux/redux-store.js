import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import friendsBarReducer from './friendsBarReducer';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from "redux-form";
import appReducer from "./appReducer";


let reducers = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsBar: friendsBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;

window.___store___ = store;
