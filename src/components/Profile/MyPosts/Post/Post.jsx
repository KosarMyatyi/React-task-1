import React from "react"
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://www.mirf.ru/wp-content/uploads/2020/09/1480331127-scaled.jpg" />
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;