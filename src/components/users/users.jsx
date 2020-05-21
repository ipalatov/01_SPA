import React from 'react';
import s from './users.module.css';
import userPhoto from '../../../src/assets/images/user.png'
import { NavLink } from 'react-router-dom';


let Users = (props) => {



    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    debugger;
    return (

        <div className={s.users_block}>
            <div>
                {pages.map(item => {
                    return (<button key={item} onClick={() => props.onPageChanged(item)} className={`${s.pageBtn} ${props.currenPage === item ? s.selected : ''}`}>{item}</button>)
                })}
            </div>

            {props.users.map(us => (
                <div key={us.id} className={s.item}>
                    <span className={s.ib}>
                        <div className={s.icon}>
                            <NavLink to={'/profile/' + us.id}>
                                <img src={us.photos.small ? us.photos.small : userPhoto} alt='icon' />
                            </NavLink>
                        </div>
                        {(us.followed)
                            ? <button
                                disabled={props.followingInProgress.some(id => id === us.id)}
                                onClick={() => { props.unFollow(us.id) }} >
                                Unfollow  </button>
                            : <button
                                disabled={props.followingInProgress.some(id => id === us.id)}
                                onClick={() => { props.follow(us.id) }} >
                                Follow </button>
                        }

                    </span>
                    <div className={s.inline}>
                        <span className={s.ns_cc}>
                            <span className={s.name_status}>
                                <NavLink to={'/profile/' + us.id}>
                                    <div className={s.name}> {us.name} </div>
                                </NavLink>
                                <div>{us.status}</div>
                            </span>
                            <span className={s.locate}>
                                <div>{"us.location.country"}</div>
                                <div>{"us.location.city"}</div>
                            </span>
                        </span>
                    </div>
                </div>))}

        </div>
    )
}

export default Users;