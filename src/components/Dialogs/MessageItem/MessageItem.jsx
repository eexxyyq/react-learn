import React from 'react'
import s from "./../Dialogs.module.css";

const MessageItem = (props) => {
    let ownerId = props.ownerId === '1'
        ? s.ownerMessages
        : s.friendMessagesяяя
    return (
        <div className={ownerId}>{props.message}</div>
    )
}

export default MessageItem