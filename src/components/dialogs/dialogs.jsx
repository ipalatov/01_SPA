import React from 'react';
import s from './dialogs.module.css';
import { NavLink } from 'react-router-dom';


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                <div className={s.item + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Ivan</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs/2'>Sergey</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs/3'>Tatyana</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs/4'>Nastyusha</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs/5'>Artem</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs/6'>Vadim</NavLink>
                </div>
            </div>
            <div className={s.dialog_messages}>
                <div className={s.message}>
                    Ivan message
                </div>
                <div className={s.message}>
                    Sergey message
                </div>
                <div className={s.message}>
                    Tatyana message
                </div>
                <div className={s.message}>
                    Nastyusha message
                </div>
                <div className={s.message}>
                    Artem message
                </div>
                <div className={s.message}>
                    Vadim message
                </div>


            </div>



        </div>




    )
}

export default Dialogs;