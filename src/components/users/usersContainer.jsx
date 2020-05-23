import React from 'react';
import { connect } from 'react-redux';
import { follow, unFollow, setCurrentPages, getUsers, toggleIsFollowingProgress } from './../../redux/usersReducer';
import Users from './users';
import Preloader from '../common/preloader/preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currenPage, this.props.pageSize)
    }

    onPageChanged = (page) => {
        this.props.getUsers(page, this.props.pageSize)
    }

    render() {
        debugger;
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currenPage={this.props.currenPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currenPage: state.usersPage.currenPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default compose(
    connect(mapStateToProps, { follow, unFollow, setCurrentPages, getUsers, toggleIsFollowingProgress }),
    withAuthRedirect
)(UsersContainer);

