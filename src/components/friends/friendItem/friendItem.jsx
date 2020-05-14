import React from 'react';
import s from '../friends.module.css';

const FriendItem = (props) => {
    return (
        <div className={s.friends_block__friend}>
            <img src={props.img} alt={props.name}></img>
            <div>
                {props.name}
            </div>
        </div>
    )
}
export default FriendItem;