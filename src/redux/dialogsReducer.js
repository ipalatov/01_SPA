const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_DIALOG_MESSAGE = 'UDATE-DIALOG-MESSAGE';

const dialogsReducer = (state, action) => {


    switch (action.type) {
        case UPDATE_DIALOG_MESSAGE:
            state.currentMessageText = action.postMessage;
            return state;
        case SEND_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.currentMessageText,
            };
            state.messagesData.push(newMessage);
            state.currentMessageText = '';
            return state;
        default:
            return state;
    }
}

export const updateDialogMessageActionCreator = (text) => ({
    type: UPDATE_DIALOG_MESSAGE,
    postMessage: text
}
)

export const sendDialogMessageActionCreator = () => ({ type: SEND_MESSAGE })

export default dialogsReducer;