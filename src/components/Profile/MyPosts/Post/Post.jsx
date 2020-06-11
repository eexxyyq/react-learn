import React from 'react'
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://c7.hotpng.com/preview/931/209/251/computer-icons-symbol-avatar-logo-clip-art-person-with-helmut.jpg' alt='#'/>
            {props.message || 'default message'}
        </div>
    )
}

export default Post