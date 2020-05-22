import React from 'react';
import LoginForm from './loginForm';
import s from './login.module.css'
import { reduxForm } from 'redux-form';


const WithFormLoginform = reduxForm({
    form: 'login'
})(LoginForm)

const onSubmit = (formData) => {
    console.log(formData)
}

const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <WithFormLoginform onSubmit={onSubmit} />
        </div>
    )
}
export default LoginPage;








