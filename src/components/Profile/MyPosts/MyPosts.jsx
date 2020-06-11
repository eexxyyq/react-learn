import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    let postsData = [
        {id: '1', message: 'Hello World'},
        {id: '2', message: 'My first post'},
        {id: '3', message: 'My second post'},
        {id: '4', message: 'again Hello World'},
        {id: '5', message: 'and again new post'},
        {id: '6', message: null}
    ]
    return (
        <div className={s.postsBlock}>
            <input/>
            <button>Add new post</button>
            <div className={s.posts}>
                {
                    postsData.map(post => <Post message={post.message}/>)
                }
            </div>
        </div>
    )
}

export default MyPosts