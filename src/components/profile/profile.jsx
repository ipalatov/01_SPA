import React from 'react';
import s from './profile.module.css';
import MyPosts from './myPosts/myPosts'
import ProfileInfo from './profileInfo/profileInfo';
import MyPostsContainer from './myPosts/myPostsContainer';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )

}

export default Profile;