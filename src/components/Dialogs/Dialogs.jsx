import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Marya' },
        { id: 2, name: 'Viktorya' },
        { id: 3, name: 'Lyudmila' },
        { id: 4, name: 'D.Dima' },
        { id: 5, name: 'Dimas' },
        { id: 6, name: 'Sasha' },
        { id: 7, name: 'Roma' }
    ];

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your day?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
        { id: 6, message: 'Yo' },
        { id: 7, message: 'Yo' }
    ];

    let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id} />);

    let messagesElements = messages.map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;