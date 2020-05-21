import React from 'react';
import s from './profileInfo.module.css';
import userPhoto from '../.././../assets/images/user.png'
import Preloader from '../../common/preloader/preloader';
import ProfileStatus from './profileStatus';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src='https://static.ngs.ru/news/99/preview/4714ecaebbaf4a7f76cf322e68baad5a149080807_824_549_c.png' alt='MyProfile'></img>
            </div>
            <div className={s.profile_block}>
                <div className={s.photo}>
                    <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} alt='profile' />
                </div>
                <div className={s.name}>
                    {props.profile.fullName}
                </div>
                <div className={s.contacts}>
                    <div>Contacts:</div>
                    <div>{props.profile.contacts.facebook}</div>
                    <div>{props.profile.contacts.website}</div>
                    <div>{props.profile.contacts.vk}</div>
                    <div>{props.profile.contacts.twitter}</div>
                    <div>{props.profile.contacts.instagram}</div>
                    <div>{props.profile.contacts.youtube}</div>
                    <div>{props.profile.contacts.github}</div>
                </div>
               
               <ProfileStatus profile={props.profile} status={props.status} updateStatus={props.updateStatus} />

                <div className={s.look_job}>
                    <div>
                        Looking for a job description:
                    </div>
                    <div>
                        {props.profile.lookingForAJobDescription}

                    </div>


                </div>

            </div>
        </div>
    )

}

export default ProfileInfo;