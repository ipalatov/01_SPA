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
            addPost={props.addPost}
            updatePostMessage={props.updatePostMessage} />
        </div>
    )

}

export default Profile;