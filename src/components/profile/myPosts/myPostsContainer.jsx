import { addPostActionCreator, updatePostMessageActionCreator } from '../../../redux/profileReducer';
import MyPosts from './myPosts';
import { connect } from 'react-redux';

const mstp = (state) => {
    return {
        currentText:state.profilePage.currentText,
        postData:state.profilePage.postData,
    }
}

const mdtp = (dispatch) => {
    return {
        AddPost: () => {dispatch(addPostActionCreator())},
        UpdatePostMessage: (text) => {dispatch(updatePostMessageActionCreator(text))}
    }
}


const MyPostsContainer = connect(mstp, mdtp)(MyPosts);


export default MyPostsContainer;