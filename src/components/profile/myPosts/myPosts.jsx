import React from 'react';
import s from './myPosts.module.css';
import Post from './post/post'
import NewPostForm from './newPost/newPostForm';
import { reduxForm } from 'redux-form';



const MyPosts = (props) => {

    let postsElements = props.postData.map(item => <Post id={item.id} message={item.message} liked={item.liked} />);

    const onAddPost = (formData) => {
        props.addPost(formData.newPostBody);
    }

    const WithFormNewPostform = reduxForm({
        form: 'addPost'
    })(NewPostForm)
    


    return (
        <div className={s.myPosts}>
            <h3>My posts:</h3>
            <WithFormNewPostform onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;