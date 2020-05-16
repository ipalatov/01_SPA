import React from 'react';
import { addPostActionCreator, updatePostMessageActionCreator } from '../../../redux/profileReducer';
import MyPosts from './myPosts';
import StoreContext from '../../../storeContext';


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer> 
         {  (store) => {

                const AddPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                const UpdatePostMessage = (text) => {
                    let action = updatePostMessageActionCreator(text);
                    store.dispatch(action);
                }

                return (
                    <MyPosts
                        currentText={store.getState().profilePage.currentText}
                        postData={store.getState().profilePage.postData}
                        AddPost={AddPost}
                        UpdatePostMessage={UpdatePostMessage}
                    />)
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;