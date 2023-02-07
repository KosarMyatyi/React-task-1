import React from "react"
import  s from './Profile.module.css';

const Profile = () => {
    return (
      <div className={s.content}>
        <div>
          <img src='https://klike.net/uploads/posts/2019-06/1561526578_1.jpg' />
        </div>
        <div>
          ava + desc
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div className={s.posts}>
            <div className={s.item}>
              post 1
            </div>
            <div className={s.item}>
              post 2
            </div>
          </div>
        </div>
      </div>
    );
}

export default Profile;