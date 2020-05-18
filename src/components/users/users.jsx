import React from 'react';
import s from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../../src/assets/images/user.png'


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currenPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onToggleFollowUser = (id, followed) => {
        (followed) ? this.props.unFollowUser(id) : this.props.followUser(id)
    }

    onPageChanged = (page) => {
        this.props.setCurrentPages(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }




    render() {

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (

            <div className={s.users_block}>
                <div>
                    {pages.map(item => {
                        return (<button onClick={() => this.onPageChanged(item)} className={`${s.pageBtn} ${this.props.currenPage === item ? s.selected : ''}`}>{item}</button>)
                    })}
                </div>


                {this.props.users.map(us => (
                    <div key={us.id} className={s.item}>
                        <span className={s.ib}>
                            <div className={s.icon}>
                                <img src={us.photos.small ? us.photos.small : userPhoto} alt='icon' />
                            </div>
                            <button onClick={() => this.onToggleFollowUser(us.id, us.followed)}> {us.followed ? 'Unfollow' : 'Follow'} </button>
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