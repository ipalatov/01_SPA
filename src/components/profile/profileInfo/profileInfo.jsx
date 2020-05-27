import React from 'react';
import s from './profileInfo.module.css';
import userPhoto from '../.././../assets/images/user.png'
import Preloader from '../../common/preloader/preloader';
import ProfileStatusWithHooks from './profileStatusWithHooks';


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }

    }

    return (
        <div>
            <div>
                <img src='https://static.ngs.ru/news/99/preview/4714ecaebbaf4a7f76cf322e68baad5a149080807_824_549_c.png' alt='MyProfile'></img>
            </div>
            <div className={s.profile_block}>
                <div className={s.photo}>
                    <img src={profile.photos.large ? profile.photos.large : userPhoto} alt='profile' />
                </div>
                <div className={s.name}>
                    {profile.fullName}
                    <div className={s.inputPhoto}> {isOwner && <input type={'file'} onChange={onMainPhotoSelected} ></input>}</div>

                </div>
                <div className={s.contacts}>
                    <div>Contacts:</div>
                    <div>{profile.contacts.facebook}</div>
                    <div>{profile.contacts.website}</div>
                    <div>{profile.contacts.vk}</div>
                    <div>{profile.contacts.twitter}</div>
                    <div>{profile.contacts.instagram}</div>
                    <div>{profile.contacts.youtube}</div>
                    <div>{profile.contacts.github}</div>
                </div>

                <ProfileStatusWithHooks profile={profile} status={status} updateStatus={updateStatus} />

                <div className={s.look_job}>
                    <div>
                        Looking for a job description:
                    </div>
                    <div>
                        {profile.lookingForAJobDescription}

                    </div>


                </div>

            </div>
        </div>
    )

}

export default ProfileInfo;