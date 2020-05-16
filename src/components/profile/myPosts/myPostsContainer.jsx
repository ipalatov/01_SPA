import React from 'react';
import { addPostActionCreator, updatePostMessageActionCreator } from '../../../redux/profileReducer';
import MyPosts from './myPosts';


const MyPostsContainer = (props) => {

    const AddPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const UpdatePostMessage = (text) => {
        let action = updatePostMessageActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts
            currentText={props.store.getState().profilePage.currentText}
            postData={props.store.getState().profilePage.postData}
            AddPost={AddPost}
            UpdatePostMessage={UpdatePostMessage}
        />
    )
}

export default MyPostsContainer;