import React from 'react';
import s from './navBar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from '../friends/friends';
import FriendsContainer from '../friends/friendsContainer';

const NavBar = (props) => {

    return (
        <nav className={s.navig}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active} >Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active} >Messeges</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.active} >News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active} >Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.active} >Settings</NavLink>
            </div>
            <div className={s.item}>
                <FriendsContainer />
            </div>
        </nav>
    )

}

export default NavBar;