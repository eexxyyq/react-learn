import React from 'react'
import s from './AvatarBlock.module.css'

const AvatarBlock = (props) => {
    return (
        <span className={s.avatar}>
            {
                props.state.map(item => <img src={item.url} alt="#"/>)
            }
        </span>
    )
}

export default AvatarBlock