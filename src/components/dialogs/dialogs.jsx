import React from 'react';
import s from './dialogs.module.css';
import Message from './Message/message';
import DialogItem from './dialogItem/dialogItem';


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData
        .map(item => <DialogItem name={item.name} id={item.id} img={item.img} />);
    let messagesElements = props.state.messagesData
        .map(item => <Message message={item.message} id={item.id} />);


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
                        placeholder='new message'>

                    </textarea>
                </div>
                <div className={s.add_new_message__block_btn}>
                    <button className={s.add_new_message__button}>Send message</button>
                </div>

            </div>

        </div>
    )
}

export default Dialogs;