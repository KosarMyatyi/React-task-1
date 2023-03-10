import React from "react"
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      {/* <div>
        <img src='https://klike.net/uploads/posts/2019-06/1561526578_1.jpg' />
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <div>
          {props.profile.aboutMe}
        </div>
        <div>
          {props.profile.lookingForAJobDescription}
        </div>
        <div>
          {props.profile.fullName}
        </div>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  );
}

export default ProfileInfo;