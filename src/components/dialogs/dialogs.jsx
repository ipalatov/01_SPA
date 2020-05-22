import React from 'react';
import s from './dialogs.module.css';
import Message from './Message/message';
import DialogItem from './dialogItem/dialogItem';
import { Redirect } from 'react-router-dom';
import DialogForm from './dialogForm';
import { reduxForm } from 'redux-form';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData
        .map(item => <DialogItem name={item.name} id={item.id} img={item.img} />);
    let messagesElements = props.messagesData
        .map(item => <Message message={item.message} id={item.id} />);

    const onAddMessage = (formData) => {
        debugger
        props.SendMessage(formData.messageBody);
    }

    if (!props.isAuth) return <Redirect to='/login' />;
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogsElements}

            </div>
            <div className={s.dialog_messages}>
                {messagesElements}
            </div>
            <WithFormDialogform onSubmit={onAddMessage} />

        </div>
    )
}


const WithFormDialogform = reduxForm({
    form: 'login'
})(DialogForm)

export default Dialogs;