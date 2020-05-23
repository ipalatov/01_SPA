import React from 'react';
import { Field, stopSubmit } from 'redux-form';
import { Input } from '../common/formsControls/formsControls';
import { maxLengthCreator, requiredField } from '../../utils/validators/validators';
import s from '../common/formsControls/formsControls.module.css'



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
                    name="email"
                    validate={[requiredField, maxLengthCreator20]}

                />
            </div>
            <div>
                <Field
                    component={Input}
                    type="password"
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

            {props.error &&
                <div className={s.formSummaryError}>
                    {props.error}
                </div>
            }

            <div>
                <button type="submit" >Login</button>
            </div>
        </form>
    )
}
export default LoginForm;