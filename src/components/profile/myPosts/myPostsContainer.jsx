import { addPost, updatePostMessage } from '../../../redux/profileReducer';
import MyPosts from './myPosts';
import { connect } from 'react-redux';








const mstp = (state) => {
    return {
        currentText:state.profilePage.currentText,
        postData:state.profilePage.postData,
    }
}



const MyPostsContainer = connect(mstp, {addPost, updatePostMessage})(MyPosts);
export default MyPostsContainer;