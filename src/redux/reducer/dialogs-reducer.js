const SEND_MESSAGE = "samurai/dialogs/SEND_MESSAGE";

let initialState = {
    users: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Dmitriy'},
        {id: 3, name: 'Marina'},
        {id: 4, name: 'Masha'},
        {id: 5, name: 'Sasha'},
        {id: 11, name: 'empty'}
    ],
    messages: [
        {id: 1, message: "Hello Andrey"},
        {id: 2, message:"Hello Dmitriy"},
        {id: 3, message:"Hello Marina"},
        {id: 4, message:"Hello Masha"},
        {id: 5, message:"Hello Denis"},
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = action.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id: 10, message: newMessage}],
            };
        default:
            return state
    }
}

export const sendMessageActionCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageText: newMessageBody});

export default dialogsReducer;