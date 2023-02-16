import React from "react"
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {addPostActionCreator} from './../../../redux/state'
import {updateNewPostTextActionCreator} from './../../../redux/state'

const MyPosts = (props) => {

    let postsElement = props.posts.map((p, index) => <Post key={index} message={p.message} likesCount={p.likesCount} /> );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={ newPostElement } 
                    value={props.newPostText} />
                </div>
                <div>
                    <button type='button' onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElement }
            </div>
        </div>
    );
}

export default MyPosts;