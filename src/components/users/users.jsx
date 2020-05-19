import React from 'react';
import s from './users.module.css';
import userPhoto from '../../../src/assets/images/user.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';


const Users = (props) => {

    const onToggleFollowUser = (id, followed) => {
        if (followed) {
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
                withCredentials: true,
                headers: { 'API-KEY': '3cc55124-4224-4d6b-b2bd-af412563b869' },
            })
                .then(response => {
                    if (response.data.resultCode == 0) {
                        props.unFollowUser(id)
                    }
                })

        } else {
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
                withCredentials: true,
                headers: { 'API-KEY': '3cc55124-4224-4d6b-b2bd-af412563b869' },
            })
                .then(response => {
                    if (response.data.resultCode == 0) {
                        props.followUser(id)
                    }
                })
        }
    }

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

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
                        <button onClick={() => onToggleFollowUser(us.id, us.followed)}> {us.followed ? 'Unfollow' : 'Follow'} </button>
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