import React from 'react';
import s from './header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    return (
        <header className={s.header}>
            <img src='https://lh3.googleusercontent.com/dij0oU7JFwwSMQAgR3wpQHerTMG1mECpm6BdUYKSyCalYZM3dbMgNrHgJ-krY_i7hwIJ' alt='MyProfile'></img>
            <div className={s.login_block}>
                {props.isAuth
                    ? (<>
                        <NavLink to='/profile/' > {props.login} </NavLink>
                        <span onClick={props.logout} className={s.logout} >Logout</span>
                    </>)
                    : <NavLink to='/login' >Login</NavLink>}
            </div>
        </header>
    )

}

export default Header;