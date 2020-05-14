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
        </div>
    )
}

export default Dialogs;