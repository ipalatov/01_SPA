import { addPost } from '../../../redux/profileReducer';
import MyPosts from './myPosts';
import { connect } from 'react-redux';


const mstp = (state) => {
    return {
        postData:state.profilePage.postData,
    }
}



const MyPostsContainer = connect(mstp, {addPost})(MyPosts);
export default MyPostsContainer;