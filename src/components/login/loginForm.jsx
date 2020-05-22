import React from 'react';
import { Field } from 'redux-form';


const LoginForm = (props) => {
    const { handleSubmit } = props;
    
    return (
        <form onSubmit={handleSubmit}>

            <div>
                <Field component={'input'} type="text" placeholder={'login'} name="login" />
            </div>
            <div>
                <Field component={'input'} type="text" placeholder={'password'} name="password" />

            </div>
            <div>
                <Field component={'input'} type={'checkbox'} name="rememberMe" /> RememberMe

            </div>
            <div>
                <button type="submit" >Login</button>
            </div>
        </form>
    )
}
export default LoginForm;