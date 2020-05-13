import React from 'react';
import s from './dialogs.module.css';
import Message from './Message/message';
import DialogItem from './dialogItem/dialogItem';

let dialogsData = [
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'Sergey' },
    { id: 3, name: 'Tatyana' },
    { id: 4, name: 'Nastyusha' },
    { id: 5, name: 'Artem' },
    { id: 6, name: 'Vadim' }
];

let messagesData = [
    { id: 1, message: 'Ivan message' },
    { id: 2, message: 'Sergey message' },
    { id: 3, message: 'Tatyana message' },
    { id: 4, message: 'Nastyusha message' },
    { id: 5, message: 'Artem message' },
    { id: 6, message: 'Vadim message' }
];


const Dialogs = (props) => {
    
    let dialogsElements = props.dialogsData
        .map(item => <DialogItem name={item.name} id={item.id} />);
    let messagesElements = props.messagesData
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