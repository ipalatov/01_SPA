import { updateDialogMessageActionCreator, sendDialogMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        currentMessageText: state.dialogsPage.currentMessageText,
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
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


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);