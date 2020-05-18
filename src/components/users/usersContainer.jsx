import React from 'react';
import { connect } from 'react-redux';
import Users from './users';
import { followAC, unfollowAC, setUsersAC, setCurrentPagesAC, setTotalUsersCountAC } from './../../redux/usersReducer';


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currenPage: state.usersPage.currenPage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => { dispatch(followAC(userId)) },
        unFollowUser: (userId) => { dispatch(unfollowAC(userId)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) },
        setCurrentPages: (pageNumber) => { dispatch(setCurrentPagesAC(pageNumber))},
        setTotalUsersCount: (TotalUsersCount) => {dispatch(setTotalUsersCountAC(TotalUsersCount))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);