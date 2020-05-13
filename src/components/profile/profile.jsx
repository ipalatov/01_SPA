import React from 'react';
import s from './profile.module.css';
import MyPosts from './myPosts/myPosts'

const Profile = () => {

    return (
        <div>
            <div>
                <img src='https://static.ngs.ru/news/99/preview/4714ecaebbaf4a7f76cf322e68baad5a149080807_824_549_c.png' alt='MyProfile'></img>
					Description
                    <MyPosts />
			</div>

        </div>
    )

}

export default Profile;