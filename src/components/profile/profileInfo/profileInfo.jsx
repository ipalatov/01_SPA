import React, { useState } from 'react';
import s from './profileInfo.module.css';
import userPhoto from '../.././../assets/images/user.png'
import Preloader from '../../common/preloader/preloader';
import ProfileStatusWithHooks from './profileStatusWithHooks';
import ProfileDataForm from './profileDataForm';
import { reduxForm } from 'redux-form';


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    let [editForm, setEditForm] = useState(false);

    const onEditMode = () => {
        setEditForm(!editForm);
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }


    if (!profile) {
        return <Preloader />
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditForm(false);
        })
    }

    return (
        <div>
            <div>
                <img src='https://static.ngs.ru/news/99/preview/4714ecaebbaf4a7f76cf322e68baad5a149080807_824_549_c.png' alt='MyProfile'></img>
            </div>

            {editForm
                ? <WithFormProfileDataForm initialValues={profile}
                    profile={profile}
                    status={status}
                    updateStatus={updateStatus}
                    isOwner={isOwner}
                    onEditMode={onEditMode}
                    onMainPhotoSelected={onMainPhotoSelected}
                    onSubmit={onSubmit} />
                : <ProfileData profile={profile}
                    status={status}
                    updateStatus={updateStatus}
                    isOwner={isOwner}
                    onEditMode={onEditMode}
                    onMainPhotoSelected={onMainPhotoSelected}
                />
            }









        </div>
    )
}



const ProfileData = ({ profile, status, updateStatus, isOwner, onEditMode, onMainPhotoSelected }) => {



    return (

        <div className={s.profile_block}>
            <div className={s.photo}>
                <img src={profile.photos.large ? profile.photos.large : userPhoto} alt='profile' />
                <div className={s.inputPhoto}> {isOwner && <input type={'file'} onChange={onMainPhotoSelected} ></input>}</div>
            </div>

            <div className={s.name}>
                {profile.fullName}
            </div>

            <ProfileStatusWithHooks profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} />
            <div className={s.look_job}>
                <div>
                    <b>Looking for a job description:</b>
                </div>
                <div>
                    {profile.lookingForAJob ? profile.lookingForAJobDescription : "No"}
                </div>
            </div>

            <div className={s.contacts}>
                <div><b>Contacts:</b></div>
                {Object.keys(profile.contacts).map(key => {
                    return <Contacts key={key}
                        contactKey={key}
                        contactValue={profile.contacts[key]} />
                })}
            </div>
            {isOwner && <div className={s.editBtn}><button onClick={onEditMode} >edit profile</button></div>}

        </div>
    )
}


export const Contacts = ({ contactKey, contactValue }) => {
    return (
        <>
            <div>{contactKey} : {contactValue}</div>
        </>)
}


const WithFormProfileDataForm = reduxForm({
    form: 'profileData'
})(ProfileDataForm)

export default ProfileInfo;