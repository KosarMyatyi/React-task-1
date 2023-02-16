import React from "react";
import s from './MyDialogs.module.css';
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator} from './../../../redux/state'
import {updateNewMessageTextActionCreator} from './../../../redux/state'

const MyDialogs = (props) => {
    // props.dialogs.map(( d, index) => console.log(d, index))

    let dialogsElements = props.dialogs.map((d, index) => <DialogsItem key={index} name={d.name} />);

    let messagesElements = props.messages.map((m, index) => <Message key={index} message={m.message} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(text);
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
                    <textarea onChange={onMessageChange} ref={newMessageElement}
                        value={props.newMessageText} />
                </div>
                <div>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>

        </div>
    );
}

export default MyDialogs;