import React from 'react';
import s from './friends.module.css';
import FriendItem from './friendItem/friendItem';


const Friends = (props) => {
    const friendElemets = props.friends.map(item => <FriendItem img={item.img} name={item.name} />);

    return (
        <div className={s.friends_block}>
            <div className={s.friends_block__void}></div>
            <div className={s.friends_block__header} > <h4>Friends</h4></div>
            <div className={s.friends_block__list} >{friendElemets}</div>
        </div>
    )
}

export default Friends;