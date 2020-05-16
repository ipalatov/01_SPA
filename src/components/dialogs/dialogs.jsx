import React from 'react';
import s from './dialogs.module.css';
import Message from './Message/message';
import DialogItem from './dialogItem/dialogItem';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData
        .map(item => <DialogItem name={item.name} id={item.id} img={item.img} />);
    let messagesElements = props.messagesData
        .map(item => <Message message={item.message} id={item.id} />);

    const onUpdateMessageText = (e) => {
        let text = e.target.value;
        props.UpdateMessageText(text);
    }

    const onSendMessage = () => {
        props.SendMessage();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogsElements}

            </div>
            <div className={s.dialog_messages}>
                {messagesElements}
            </div>
            <div className={s.add_new_message}>
                <div className={s.add_new_message__block_textarea} >
                    <textarea
                        className={s.add_new_message__textarea}
                        placeholder='new message'
                        value={props.currentMessageText}
                        onChange={onUpdateMessageText} />
                </div>
                <div className={s.add_new_message__block_btn}>
                    <button
                        className={s.add_new_message__button}
                        onClick={onSendMessage}  >Send message
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Dialogs;