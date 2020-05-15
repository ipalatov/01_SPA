import React from 'react';
import s from './myPosts.module.css';
import Post from './post/post'
import {addPostActionCreator, updatePostMessageActionCreator} from '../../../redux/profileReducer';



const MyPosts = (props) => {

    const postData = props.postData;

    let postsElements = postData.map(item => <Post id={item.id} message={item.message} liked={item.liked} />);

    const onAddPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onUpdatePostMessage = (e) => {
        let text = e.target.value;
        let action = updatePostMessageActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts:</h3>
            <div className={s.newPost}>
                <div><textarea
                    placeholder='new post'
                    value={props.currentText}
                    onChange={onUpdatePostMessage} />
                </div>
                <div><button
                    className={s.newPost__button}
                    onClick={onAddPost}
                >Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;