import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPagesAC, setTotalUsersCountAC, toggleIsFetchingAC } from './../../redux/usersReducer';
import * as axios from 'axios';
import Users from './users';
import Preloader from '../common/preloader/preloader';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currenPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPages(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            })
    }

    render() {

        return (
            <>

                {this.props.isFetching
                    ? <Preloader />
                    : <Users
                        followUser={this.props.followUser}
                        unFollowUser={this.props.unFollowUser}
                        totalUserCount={this.props.totalUserCount}
                        currenPage={this.props.currenPage}
                        pageSize={this.props.pageSize}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        isFetching={this.props.isFetching}
                    />}


            </>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currenPage: state.usersPage.currenPage,
        isFetching: state.usersPage.isFetching,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => { dispatch(followAC(userId)) },
        unFollowUser: (userId) => { dispatch(unfollowAC(userId)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) },
        setCurrentPages: (pageNumber) => { dispatch(setCurrentPagesAC(pageNumber)) },
        setTotalUsersCount: (TotalUsersCount) => { dispatch(setTotalUsersCountAC(TotalUsersCount)) },
        toggleIsFetching: (isFetching) => { dispatch(toggleIsFetchingAC(isFetching)) },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);