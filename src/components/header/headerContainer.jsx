import React, { Component } from 'react';
import Header from './header';
import { connect } from 'react-redux';
import { authorization } from '../../redux/authReducer';

class HeaderContainer extends Component {

    componentDidMount() {
        this.props.authorization();
        
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapsStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default connect(mapsStateToProps, { authorization })(HeaderContainer);

