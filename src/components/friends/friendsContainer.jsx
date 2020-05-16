import Friends from './friends';
import { connect } from 'react-redux';


const mstp = (state)=> {
    return {
        friends: state.friendsBar.friends,
    }
}

const mdtp = (dispatch) => {
    return {}
}


const FriendsContainer = connect(mstp, mdtp)(Friends);


export default FriendsContainer;