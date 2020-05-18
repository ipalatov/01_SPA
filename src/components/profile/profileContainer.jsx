import React, { Component } from 'react';
import Profile from './profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { addPost, updatePostMessage, setUserProfile } from '../../redux/profileReducer';

class ProfileContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/9`)
            .then(response => {
                this.props.setUserProfile(response.data);
              

            })
    }


    render() {
        return (

            <Profile {... this.props} profile={this.props.profile} /> // разворачиваем все пропсы по аттрибутам и направляем в компоненту Profile
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
    
}


export default connect(mapStateToProps, { addPost, updatePostMessage, setUserProfile })(ProfileContainer);
