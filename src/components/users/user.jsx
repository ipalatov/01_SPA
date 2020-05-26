import React from 'react';
import s from './users.module.css';
import userPhoto from '../../../src/assets/images/user.png'
import { NavLink } from 'react-router-dom';


let User = ({ user, followingInProgress, follow, unFollow }) => {
    return (

        <div className={s.item}>
            <span className={s.ib}>
                <div className={s.icon}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small ? user.photos.small : userPhoto} alt='icon' />
                    </NavLink>
                </div>
                {(user.followed)
                    ? <button
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => { unFollow(user.id) }} >
                        Unfollow  </button>
                    : <button
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => { follow(user.id) }} >
                        Follow </button>
                }

            </span>
            <div className={s.inline}>
                <span className={s.ns_cc}>
                    <span className={s.name_status}>
                        <NavLink to={'/profile/' + user.id}>
                            <div className={s.name}> {user.name} </div>
                        </NavLink>
                        <div>{user.status}</div>
                    </span>
                    <span className={s.locate}>
                        <div>{"us.location.country"}</div>
                        <div>{"us.location.city"}</div>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default User;