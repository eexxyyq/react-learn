import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={s.messages}>{props.message}</div>
    )
}

const Dialogs = () => {
    let dialogsData = [
        {id: '1', name: 'Andrew'},
        {id: '2', name: 'Eliza'},
        {id: '3', name: 'Semen'},
        {id: '4', name: 'Petr'},
        {id: '5', name: 'Elly'}
    ]

    let messagesData = [
        {id : '1', message: 'How r u?'},
        {id : '2', message: 'Hello!'},
        {id : '3', message: 'Some new msg'}
    ]

    return (
        <div className={s.dialogsBlock}>
            <div className={s.dialogsItems}>
                {
                    dialogsData.map(item => <DialogItem name={item.name} id={item.id}/>)
                }
            </div>
            <div className={s.messagesItems}>
                {
                    messagesData.map(item => <MessageItem message={item.message}/>)
                }
            </div>
        </div>
    )
}

export default Dialogs