import React from 'react';
import s from './profile.module.css';
import MyPosts from './myPosts/myPosts'
import ProfileInfo from './profileInfo/profileInfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts
                postData={props.profilePage.postData}
                currentText={props.profilePage.currentText}
                dispatch={props.dispatch}
            />
        </div>
    )

}

export default Profile;