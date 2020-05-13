import React from 'react';
import s from './myPosts.module.css';
import Post from './post/post'

const MyPosts = () => {

    return (
        <div className={s.myPosts}>
            <h3>My posts:</h3>
            <div className={s.newPost}>
                <textarea placeholder='new post'></textarea>
                <button className={s.newPost__button}>Add post</button>
            </div>
            <div className='posts'>
                <Post message='Hello, World! How are you?' liked={15} />
                <Post message='Its my first post!' liked={20} />
                
            </div>
        </div>
    )
}

export default MyPosts;