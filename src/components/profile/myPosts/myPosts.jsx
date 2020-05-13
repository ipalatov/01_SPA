import React from 'react';
import s from './myPosts.module.css';
import Post from './post/post'



const MyPosts = (props) => {
    
    const postData = props.postData;

    let postsElements = postData.map(item => <Post id={item.id} message={item.message} liked={item.liked} />);

    return (
        <div className={s.myPosts}>
            <h3>My posts:</h3>
            <div className={s.newPost}>
                <div><textarea placeholder='new post'></textarea></div>
                <div><button className={s.newPost__button}>Add post</button></div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;