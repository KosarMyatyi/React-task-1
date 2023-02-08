import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Maria
                </div>
                <div className={s.dialog}>
                    Viktorya
                </div>
                <div className={s.dialog}>
                    D.Dima
                </div>
                <div className={s.dialog}>
                    Lyudmila
                </div>
                <div className={s.dialog}>
                    Dimas
                </div>
                <div className={s.dialog}>
                    Roma
                </div>
                <div className={s.dialog}>
                    Valerya
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your day?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );
}

export default Dialogs;