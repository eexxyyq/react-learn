import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let postText = React.createRef()

    let onPostChange = () => {
        props.updateNewPostText(postText.current.value)
    }

    return (
        <div className={s.postsBlock}>
            <input onChange={onPostChange} ref={postText} value={props.newPostText}/>
            <button onClick={props.addPost}>Add new post</button>
            <div className={s.posts}>
                {
                    props.posts.map(post => <Post message={post.message}/>)
                }
            </div>
        </div>
    )
}

export default MyPosts