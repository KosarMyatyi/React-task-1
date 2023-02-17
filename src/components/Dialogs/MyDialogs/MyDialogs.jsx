import React from "react";
import s from './MyDialogs.module.css';
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator} from './../../../redux/dialogs-reduser'
import {updateNewMessageBodyCreator} from './../../../redux/dialogs-reduser'

const MyDialogs = (props) => {
    // props.dialogs.map(( d, index) => console.log(d, index))

    let dialogsElements = props.dialogs.map((d, index) => <DialogsItem key={index} name={d.name} />);

    let messagesElements = props.messages.map((m, index) => <Message key={index} message={m.message} />);

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch(sendMessageCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageBodyCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <div>
                    <textarea placeholder="Enter new message" onChange={onMessageChange} ref={newMessageElement}
                        value={props.newMessageBody} />
                </div>
                <div>
                    <button onClick={sendMessage}>Send Message</button>
                </div>
            </div>

        </div>
    );
}

export default MyDialogs;