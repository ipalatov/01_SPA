import React from 'react';
import s from '../myPosts.module.css';
import { Field } from 'redux-form';



const NewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.newPost}>
            <div>
                <Field component={'textarea'}
                    type={'text'}
                    placeholder='new post'
                    name={'newPostBody'}

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