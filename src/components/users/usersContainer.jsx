import React from 'react';
import { connect } from 'react-redux';
import { followUser, unFollowUser, setUsers, setCurrentPages, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress } from './../../redux/usersReducer';
import Users from './users';
import Preloader from '../common/preloader/preloader';
import { usersAPI } from '../../api/api';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currenPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        })
    }

    onPageChanged = (page) => {
        debugger;
        this.props.toggleIsFetching(true);
        this.props.setCurrentPages(page);
        usersAPI.getUsers(page, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
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
                        followingInProgress={this.props.followingInProgress}
                        toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}

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
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default connect(mapStateToProps, {
    followUser, unFollowUser, setUsers, setCurrentPages, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress
})(UsersContainer);