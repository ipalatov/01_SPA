import React from 'react';
import { Field } from 'redux-form';
import { Input } from '../common/formsControls/formsControls';
import { maxLengthCreator, requiredField } from '../../utils/validators/validators';
import s from '../common/formsControls/formsControls.module.css'



let maxLengthCreator20 = maxLengthCreator(20);

const LoginForm = ({ handleSubmit, error, captchaURL }) => {
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

            {captchaURL
                && <div>
                    <img src={captchaURL} alt={'captchaURL'} ></img>
                    <div>
                        <Field
                            component={Input}
                            type="text"
                            placeholder={'captcha'}
                            name="captcha"
                            validate={[requiredField]}
                        />
                    </div>
                </div>
            }

            {error &&
                <div className={s.formSummaryError}>
                    {error}
                </div>
            }

            <div>
                <button type="submit" >Login</button>
            </div>
        </form>
    )
}
export default LoginForm;