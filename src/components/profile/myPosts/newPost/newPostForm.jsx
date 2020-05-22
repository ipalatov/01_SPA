import React from 'react';
import s from '../myPosts.module.css';
import { Field } from 'redux-form';
import { requiredField, maxLengthCreator } from '../../../../utils/validators/validators';
import { Textarea } from '../../../common/formsControls/formsControls';

const maxLengthCreator10 = maxLengthCreator(10);

const NewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.newPost}>
            <div>
                <Field component={Textarea}
                    type={'text'}
                    placeholder='new post'
                    name={'newPostBody'}
                    validate={[requiredField, maxLengthCreator10]}

                />
            </div>
            <div>
                <button
                    className={s.newPost__button}
                    type={'submit'}
                >Add post
                </button>
            </div>
        </form>
    )
}

export default NewPostForm;