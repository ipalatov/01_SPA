import React from 'react';
import s from './myPosts.module.css';
import Post from './post/post'


const MyPosts = (props) => {

    const postData = props.postData;

    let postsElements = postData.map(item => <Post id={item.id} message={item.message} liked={item.liked} />);

    let newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
        newPostElement.current.value = null;
    }

    const updatePostMessage = () => {
        let text = newPostElement.current.value;
        let action = { type: 'UDATE-POST-MESSAGE', postMessage: text };
        props.dispatch(action);
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts:</h3>
            <div className={s.newPost}>
                <div><textarea
                    ref={newPostElement}
                    placeholder='new post'
                    value={props.currentText}
                    onChange={updatePostMessage} />
                </div>
                <div><button
                    className={s.newPost__button}
                    onClick={addPost}
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