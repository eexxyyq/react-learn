import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    let addMessage = React.createRef()
    let sendMessage = () => {
    }
    return (
        <div className={s.dialogsBlock}>
            <div className={s.dialogsItems}>
                {
                    props.state.dialogsData.map(item => <DialogItem name={item.name} id={item.id}/>)
                }
            </div>
            <div className={s.messagesItems}>
                {
                    props.state.messagesData.map(item => <MessageItem message={item.message} owner={item.owner}/>)
                }
            </div>
            <button onClick={sendMessage}>Send message</button>
            <input ref={addMessage}/>

        </div>
    )
}

export default Dialogs