import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./reducer/profile-reducer";
import sidebarReducer from "./reducer/sidebar-reducer";
import dialogsReducer from "./reducer/dialogs-reducer";
import usersReducer from "./reducer/users-reducer";
import authReducer from "./reducer/auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer} from "redux-form";
import appReducer from "./reducer/app-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;