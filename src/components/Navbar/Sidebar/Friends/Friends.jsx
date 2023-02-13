import React from "react";
import s from './Friends.module.css';


const Friends = (props) => {
    return (
        <div className={s.friendsItem}>
            <img src="https://static-cse.canva.com/blob/969170/1600w--JuHp_Tx_2w.jpg" />
            { props.name }
            <div>
                 { props.img }
            </div>
        </div>
    );
}

export default Friends;