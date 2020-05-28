import React from 'react';
import LoginForm from './loginForm';
import s from './login.module.css'
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';


const WithFormLoginform = reduxForm({
    form: 'login'
})(LoginForm)



const LoginPage = (props) => {

    const onSubmit = (formData) => {
        const { email, password, rememberMe, captcha } = formData;
        props.login(email, password, rememberMe, captcha);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
            <div>
                <h1>Login</h1>
                <WithFormLoginform onSubmit={onSubmit} captchaURL={props.captchaURL} />
            </div>
        )
}

const mstp = (state) => ({
    captchaURL: state.auth.captchaURL,
    isAuth: state.auth.isAuth
})

export default connect(mstp, { login })(LoginPage);








