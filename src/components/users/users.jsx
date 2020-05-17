import React from 'react';
import s from './users.module.css';


const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1, photoUrl: 'https://www.meme-arsenal.com/memes/b5d2ec8e1ffa887b239fb66a8653dfe6.jpg',
                    followed: false, fullname: 'Ivan', status: 'I am a boss', location: { country: 'Russia', city: 'Volzhsky' }
                },
                {
                    id: 2, photoUrl: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png',
                    followed: true, fullname: 'Sergiy', status: 'Hello everyone!', location: { country: 'Ukraine', city: 'Kiev' }
                },
                {
                    id: 3, photoUrl: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
                    followed: false, fullname: 'Tatyana', status: 'Not disturb!', location: { country: 'Russia', city: 'Moscow' }
                },
                {
                    id: 4, photoUrl: 'https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg',
                    followed: false, fullname: 'Artem', status: 'I\'m pretty guy', location: { country: 'Russia', city: 'Vyksa' }
                },
                {
                    id: 5, photoUrl: 'https://whatsism.com/uploads/posts/2018-07/1530545833_il2zmvzx9py.jpg',
                    followed: false, fullname: 'Dmitry', status: 'I\'ll teach you how to React', location: { country: 'Belarus', city: 'Minsk' }
                },
            ]
        )
    }


    const toggleFollowUser = (id, followed) => {
        (followed) ? props.unFollowUser(id) : props.followUser(id)
    }

    return (
        <div className={s.users_block}>
            {props.users.map(u => (
                <div key={u.id} className={s.item}>
                    <span className={s.ib}>
                        <div className={s.icon}>
                            <img src={u.photoUrl} alt='icon' />
                        </div>
                        <button onClick={() => toggleFollowUser(u.id, u.followed)}> {u.followed ? 'Unfollow' : 'Follow'} </button>
                    </span>
                    <span className={s.ns_cc}>
                        <span className={s.name_status}>
                            <div className={s.name}>{u.fullname}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>))}
        </div>
    )

}

export default Users;