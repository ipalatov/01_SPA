import React from 'react';
import s from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../../src/assets/images/user.png'


class Users extends React.Component {

    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=20&count=5').then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    toggleFollowUser = (id, followed) => {
        (followed) ? this.props.unFollowUser(id) : this.props.followUser(id)
    }

    render() {
        return (

            <div className={s.users_block}>
                {this.props.users.map(us => (
                    <div key={us.id} className={s.item}>
                        <span className={s.ib}>
                            <div className={s.icon}>
                                <img src={us.photos.small ? us.photos.small : userPhoto} alt='icon' />
                            </div>
                            <button onClick={() => this.toggleFollowUser(us.id, us.followed)}> {us.followed ? 'Unfollow' : 'Follow'} </button>
                        </span>
                        <div className={s.inline}>
                            <span className={s.ns_cc}>
                                <span className={s.name_status}>
                                    <div className={s.name}> {us.name} </div>
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
}






export default Users;