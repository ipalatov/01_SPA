import React from 'react';
import s from './profile.module.css';

const Profile = () => {

    return (
        <div className={s.content}>
            <div>
                <img src='https://static.ngs.ru/news/99/preview/4714ecaebbaf4a7f76cf322e68baad5a149080807_824_549_c.png' alt='MyProfile'></img>
					Description
				</div>
            <div>
                My posts:
					<div>
                    New post
					</div>
                <div>
                    <div className={s.item}>
                        Post1
						</div>
                    <div className={s.item}>
                        Post2
						</div>
                </div>
            </div>
        </div>
    )

}

export default Profile;