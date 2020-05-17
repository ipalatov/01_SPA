import React from 'react';
import { connect } from 'react-redux';
import Users from './users';
import { followAC, unfollowAC, setUsersAC } from './../../redux/usersReducer';


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => { dispatch(followAC(userId)) },
        unFollowUser: (userId) => { dispatch(unfollowAC(userId)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);