import React from 'react';
import s from '../dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    return (
        <div className={s.item}>

            <NavLink to={"/dialogs/" + props.id}>
                <div className={s.item_link}>
                    <img src={props.img} alt={props.name}></img>
                    <div>
                        {props.name}
                    </div>

                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem;