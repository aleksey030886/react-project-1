import dialogsReducer from "./reducer/dialogs-reducer";
import profileReducer from "./reducer/profile-reducer";
import sidebarReducer from "./reducer/sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message:"Hi, how are you?", likeCount:"14"},
                {id: 2, message:"My name is John", likeCount:"16"},
                {id: 3, message:"Hi John", likeCount:"190"}
            ],
            newPostText: 'it kamasutra'
        },
        dialogsPage: {
            users: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Dmitriy'},
                {id: 3, name: 'Marina'},
                {id: 4, name: 'Masha'},
                {id: 5, name: 'Sasha'}
            ],
            messages: [
                {id: 1, message: "Hello Andrey"},
                {id: 2, message:"Hello Dmitriy"},
                {id: 3, message:"Hello Marina"},
                {id: 4, message:"Hello Masha"},
                {id: 5, message:"Hello Denis"},
            ],
            newMessageText: "Privet i am Rookie"
        },
        sidebar:{ }
    },
    _callSubscriber () {
        console.log("fsdfsd");
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    getState () {
        return this._state;
    },
    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;