import React from 'react';
import s from './formsControls.module.css';
import { Field } from 'redux-form';

export const Textarea = ({ input, meta, ...props }) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={s.form_control + ' ' + (hasError ? s.error : '')} >
            <textarea {...input}  {...props} />
            {hasError && <span> {meta.error} </span>}
        </div>
    )
}


export const Input = ({ input, meta: {error, touched}, ...props }) => {

    const hasError = touched && error;
    return (
        <div className={s.form_control + ' ' + (hasError ? s.error : '')} >
            <input {...input}  {...props} />
            {hasError && <span> {error} </span>}
        </div>
    )
}


