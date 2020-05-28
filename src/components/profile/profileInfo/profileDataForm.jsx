import React from 'react';
import s from './profileInfo.module.css';
import userPhoto from '../.././../assets/images/user.png'
import Preloader from '../../common/preloader/preloader';
import ProfileStatusWithHooks from './profileStatusWithHooks';
import { Contacts } from './profileInfo';
import { Field } from 'redux-form';
import { Textarea, Input } from '../../common/formsControls/formsControls';
import { requiredField, maxLengthCreator } from '../../../utils/validators/validators';
import ss from '../../common/formsControls/formsControls.module.css'




const ProfileDataForm = ({ profile, status, updateStatus, isOwner, onEditMode, onMainPhotoSelected, handleSubmit, error }) => {
    const maxLengthCreator50 = maxLengthCreator(50);


    return (
        <form className={s.profile_block} onSubmit={handleSubmit}>
            <div className={s.photo}>
                <img src={profile.photos.large ? profile.photos.large : userPhoto} alt='profile' />
                <div className={s.inputPhoto}> {isOwner && <input type={'file'} onChange={onMainPhotoSelected} ></input>}</div>
            </div>

            <Field component={Input}
                type={'text'}
                name={'fullName'}
                className={s.name_input}
                placeholder='enter fullname'
            // validate={[requiredField, maxLengthCreator50]}
            />
                       
            <ProfileStatusWithHooks profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} />
            <div className={s.look_job}>
                <div>
                    <b>Looking for a job description:</b>
                </div>
                <div>
                    <Field component={Input}
                        type={'checkbox'}
                        name={'lookingForAJob'}
                    // validate={[requiredField, maxLengthCreator50]}
                    />
                    <Field component={Textarea}
                        type={'text'}
                        name={'lookingForAJobDescription'}
                        placeholder='enter looking For A Job Description'
                    // validate={[requiredField, maxLengthCreator50]}
                    />

                    <Field component={Textarea}
                        type={'text'}
                        name={'aboutMe'}
                        placeholder='enter aboutMe'
                    // validate={[requiredField, maxLengthCreator50]}
                    />

                </div>
            </div>

            <div className={s.contacts}>
                <div><b>Contacts:</b></div>
                {Object.keys(profile.contacts).map(key => {
                    return <Contacts key={key}
                        contactKey={key}
                        contactValue={
                            <Field component={Input}
                        type={'text'}
                        name={'contacts.'+ key}
                        placeholder={key}
                    // validate={[requiredField, maxLengthCreator50]}
                    />


                        } />
                })}
            </div>
            
            {isOwner && <div className={s.editBtn}><button>save profile</button></div>}

            {error &&
                <div className={ss.formSummaryError}>
                    {error}
                </div>
            }

        </form>
    )
}


export default ProfileDataForm;
