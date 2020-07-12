import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
    let postText = React.createRef()

    let onPostChange = () => {
        props.dispatch(updateNewPostTextActionCreator(postText.current.value))
    }

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    return (
        <div className={s.postsBlock}>
            <input onChange={onPostChange} ref={postText} value={props.newPostText}/>
            <button onClick={addPost}>Add new post</button>
            <div className={s.posts}>
                {
                    props.posts.map(post => <Post message={post.message}/>)
                }
            </div>
        </div>
    )
}

export default MyPosts