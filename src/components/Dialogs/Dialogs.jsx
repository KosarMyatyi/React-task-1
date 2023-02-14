import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />);

    let messagesElements = props.messages.map(m => <Message message={m.message} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                {messagesElements}
                    <div>
                        <textarea ref={ newMessageElement }></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;