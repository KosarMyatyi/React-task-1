import React from "react";
import { NavLink } from "react-router-dom";
import s from './../MyDialogs.module.css';

const DialogsItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
        <img src="https://static-cse.canva.com/blob/969170/1600w--JuHp_Tx_2w.jpg"/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}


export default DialogsItem;