import React from 'react';
import { updateDialogMessageActionCreator, sendDialogMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './dialogs';


const DialogsContainer = (props) => {

    const UpdateMessageText = (text) => {
        let action = updateDialogMessageActionCreator(text);
        props.store.dispatch(action);
    }

    const SendMessage = () => {
        let action = sendDialogMessageActionCreator();
        props.store.dispatch(action);
    }

    return (
        <Dialogs
            currentMessageText={props.store.getState().dialogsPage.currentMessageText}
            dialogsData={props.store.getState().dialogsPage.dialogsData}
            messagesData={props.store.getState().dialogsPage.messagesData}
            UpdateMessageText={UpdateMessageText}
            SendMessage={SendMessage}
        />
    )
}

export default DialogsContainer;