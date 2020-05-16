import React from 'react';
import s from './myPosts.module.css';
import Post from './post/post'



const MyPosts = (props) => {

    let postsElements = props.postData.map(item => <Post id={item.id} message={item.message} liked={item.liked} />);

    const onAddPost = () => {
        props.AddPost();
    }

    const onUpdatePostMessage = (e) => {
        let text = e.target.value;
        props.UpdatePostMessage(text);
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