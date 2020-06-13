import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    return (
        <div className={s.postsBlock}>
            <input/>
            <button>Add new post</button>
            <div className={s.posts}>
                {
                    props.posts.map(post => <Post message={post.message}/>)
                }
            </div>
        </div>
    )
}

export default MyPosts