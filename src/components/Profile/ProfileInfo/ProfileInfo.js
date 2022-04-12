import avatar from "../../../img/avatar.jpg";
import React from "react";
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile,status, updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }
        return (
            <div className={style.content}>
                <div className={style.avatar}>
                    <img src={profile.photos.large }/>
                    <div>
                        <div> {profile.aboutMe} </div>
                        <div> {profile.contacts.facebook} </div>
                        <div> {profile.lookingForAJobDescription} </div>
                    </div>
                    <img src={avatar}/>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        )
}

export default ProfileInfo;