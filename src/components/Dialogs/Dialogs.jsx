import React from "react";
import DialogsItem from "./MyDialogs/DialogItem/DialogItem";
import MyDialogs from "./MyDialogs/MyDialogs";
import Message from "./MyDialogs/Message/Message";


const Dialogs = (props) => {
    // console.log(props)
    return (
        <div>
            <Message />
            <MyDialogs
                message={props.message}
                newMessageText={props.newMessageText}
                addMessage={props.addMessage}
                updateNewMessageText={props.updateNewMessageText}
                messages={props.messages}
                dialogs={props.dialogs}
            />
        </div>
    );
}

export default Dialogs;