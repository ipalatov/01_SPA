import React from 'react';
import s from './profile.module.css';
import MyPosts from './myPosts/myPosts'
import ProfileInfo from './profileInfo/profileInfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts postData={props.state.postData} />
        </div>
    )

}

export default Profile;