import { updateDialogMessageActionCreator, sendDialogMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        currentMessageText: state.dialogsPage.currentMessageText,
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        UpdateMessageText: (text) => {
            let action = updateDialogMessageActionCreator(text);
            dispatch(action);
        },
        SendMessage: () => {
            let action = sendDialogMessageActionCreator();
            dispatch(action);
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;