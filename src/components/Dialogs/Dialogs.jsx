import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    return (
        <div className={s.dialogsBlock}>
            <div className={s.dialogsItems}>
                {
                    props.dialogs.map(item => <DialogItem name={item.name} id={item.id}/>)
                }
            </div>
            <div className={s.messagesItems}>
                {
                    props.messages.map(item => <MessageItem message={item.message}/>)
                }
            </div>
        </div>
    )
}

export default Dialogs