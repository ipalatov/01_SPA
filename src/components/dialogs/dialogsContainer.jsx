import { sendDialogMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        SendMessage: (messageBody) => {
            let action = sendDialogMessageActionCreator(messageBody);
            dispatch(action);
        },
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);