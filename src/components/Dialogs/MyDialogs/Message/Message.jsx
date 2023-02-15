import React from "react";
import s from './../MyDialogs.module.css'; 


const Message = (props) => {
    return (
        <div className={s.dialog}>
            <div className={s.messages}>
            {props.message}
            <img src="https://png.pngtree.com/png-clipart/20201031/ourmid/pngtree-circle-clipart-lake-blue-round-png-image_2382136.jpg" />
            </div>
        </div>
    );
}


export default Message;