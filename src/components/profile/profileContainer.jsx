import React, { Component } from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { addPost, updatePostMessage, setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : 8213;
        this.props.setUserProfile(userId);
        
    }


    render() {


        return (
            <Profile {... this.props} profile={this.props.profile} /> // разворачиваем все пропсы по аттрибутам и направляем в компоненту Profile
        )
    }
}


let  AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }

}

let WithURLDATAContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { addPost, updatePostMessage, setUserProfile })(WithURLDATAContainerComponent);
