import React, { Component } from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { addPost, setUserProfile, getUserStatus, updateStatus } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends Component {

    componentDidMount() {
        debugger;
        let userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.authorizedUserId;
        this.props.setUserProfile(userId);
        this.props.getUserStatus(userId);

    }


    render() {


        return (
            <Profile {... this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} /> // разворачиваем все пропсы по аттрибутам и направляем в компоненту Profile
        )
    }
}



const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }

}


export default compose(
    connect(mapStateToProps, { addPost, setUserProfile, getUserStatus, updateStatus }),
    withRouter
)(ProfileContainer);
