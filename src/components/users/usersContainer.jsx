import React from 'react';
import { connect } from 'react-redux';
import { follow, unFollow, setCurrentPages, requestUsers, toggleIsFollowingProgress } from './../../redux/usersReducer';
import Users from './users';
import Preloader from '../common/preloader/preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUsers, getPageSize, getTotalUserCount, getCurrenPage, getIsFetching, getFollowingInProgress } from '../../redux/usersSelectors';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currenPage, this.props.pageSize)
    }

    onPageChanged = (page) => {
        this.props.requestUsers(page, this.props.pageSize)
    }

    render() {
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
        users: getUsers(state),
        pageSize: getPageSize (state),
        totalUserCount: getTotalUserCount(state),
        currenPage: getCurrenPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(
    connect(mapStateToProps, { follow, unFollow, setCurrentPages, requestUsers, toggleIsFollowingProgress }),
    withAuthRedirect
)(UsersContainer);

