import React from "react"
import MyPosts from "./MyPosts/MyPosts";
import  s from './Profile.module.css';

const Profile = () => {
    return (
      <div>
        <div>
          <img src='https://klike.net/uploads/posts/2019-06/1561526578_1.jpg' />
        </div>
        <div>
          ava + desc
        </div>
        <MyPosts />
      </div>
    );
}

export default Profile;