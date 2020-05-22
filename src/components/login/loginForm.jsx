import React from 'react';
import { Field } from 'redux-form';
import { Input } from '../common/formsControls/formsControls';
import { maxLengthCreator, requiredField } from '../../utils/validators/validators';



let maxLengthCreator20 = maxLengthCreator(20);

const LoginForm = (props) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>

            <div>
                <Field
                    component={Input}
                    type="text"
                    placeholder={'login'}
                    name="login"
                    validate={[requiredField, maxLengthCreator20]}

                />
            </div>
            <div>
                <Field
                    component={Input}
                    type="text"
                    placeholder={'password'}
                    name="password"
                    validate={[requiredField, maxLengthCreator20]}

                />
            </div>
            <div>
                <Field
                    component={Input}
                    type={'checkbox'}
                    name="rememberMe"
                /> RememberMe

            </div>
            <div>
                <button type="submit" >Login</button>
            </div>
        </form>
    )
}
export default LoginForm;