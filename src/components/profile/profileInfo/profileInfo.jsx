import React from 'react';
import s from './profileInfo.module.css';

const ProfileInfo = () => {

    return (
        <div>
            <div>
                <img src='https://static.ngs.ru/news/99/preview/4714ecaebbaf4a7f76cf322e68baad5a149080807_824_549_c.png' alt='MyProfile'></img>
			</div>
            <div className={s.description_block}>
                ava + Description
            </div>
        </div>
    )

}

export default ProfileInfo;