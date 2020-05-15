import React from 'react';
import s from './post.module.css';

const Post = (props) => {

    return (
        <div className={s.post}>
            <img src='https://www.meme-arsenal.com/memes/bf0296e8bfa92558d0ca180289194068.jpg' alt='avatar'></img>
            <span className={s.post_text} >{props.message} </span>
            <div>
                Liked {props.liked}
            </div>
        </div>
    )

}

export default Post;