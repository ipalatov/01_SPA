import React from 'react';
import s from './profile.module.css';
import ProfileInfo from './profileInfo/profileInfo';
import MyPostsContainer from './myPosts/myPostsContainer';
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
    
    if (!props.isAuth) return <Redirect to='/login' />;

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )

}

export default Profile;