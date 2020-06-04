import React, { Component } from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { addPost, setUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends Component {

    refreshProfileAndStatus = () => {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.authorizedUserId;
        this.props.setUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfileAndStatus()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfileAndStatus()
        }
    }

    render() {


        return (
            <Profile {... this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto} /> // разворачиваем все пропсы по аттрибутам и направляем в компоненту Profile
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
    connect(mapStateToProps, { addPost, setUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile }),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer);
