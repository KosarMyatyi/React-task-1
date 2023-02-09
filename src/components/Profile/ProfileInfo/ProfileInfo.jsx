import React from "react"
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://klike.net/uploads/posts/2019-06/1561526578_1.jpg' />
      </div>
      <div className={s.descriptionBlock}>
        ava + desc
      </div>
    </div>
  );
}

export default ProfileInfo;