import React from 'react';
import { connect } from 'react-redux';
import { follow, unFollow, setCurrentPages, getUsers } from './../../redux/usersReducer';
import Users from './users';
import Preloader from '../common/preloader/preloader';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currenPage, this.props.pageSize)
    }

    onPageChanged = (page) => {
        this.props.getUsers(page, this.props.pageSize)
    }

    render() {

        return (
            <>

                {this.props.isFetching
                    ? <Preloader />
                    : <Users
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        totalUserCount={this.props.totalUserCount}
                        currenPage={this.props.currenPage}
                        pageSize={this.props.pageSize}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
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
    follow, unFollow, setCurrentPages,getUsers
})(UsersContainer);