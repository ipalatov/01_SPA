import React from 'react';
import { Field } from 'redux-form';
import s from './dialogs.module.css';



const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.add_new_message}>
            <div className={s.add_new_message__block_textarea} >
                <Field component={'textarea'}
                    type={'text'}
                    name={'messageBody'}
                    className={s.add_new_message__textarea}
                    placeholder='enter new message'
                // value={props.currentMessageText}
                // onChange={onUpdateMessageText}
                />
            </div>
            <div className={s.add_new_message__block_btn}>
                <button type={'submit'}
                    className={s.add_new_message__button}
                // onClick={onSendMessage}  >Send message
                > Add message
                </button>
            </div>
        </form>


    )
}

export default DialogForm;