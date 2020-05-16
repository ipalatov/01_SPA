import React from 'react';
import { updateDialogMessageActionCreator, sendDialogMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './dialogs';
import StoreContext from '../../storeContext';


const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {(store) => {

                const UpdateMessageText = (text) => {
                    let action = updateDialogMessageActionCreator(text);
                    store.dispatch(action);
                }

                const SendMessage = () => {
                    let action = sendDialogMessageActionCreator();
                    store.dispatch(action);
                }

                return (
                    <Dialogs
                        currentMessageText={store.getState().dialogsPage.currentMessageText}
                        dialogsData={store.getState().dialogsPage.dialogsData}
                        messagesData={store.getState().dialogsPage.messagesData}
                        UpdateMessageText={UpdateMessageText}
                        SendMessage={SendMessage}
                    />

                )
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;