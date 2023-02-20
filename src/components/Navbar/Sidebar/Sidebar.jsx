import React from "react";
import s from './Sidebar.module.css';
import Friends from "./Friends/Friends";


const Sidebar = (props) => {

    let sidebarElement = props.friends.map((f, index) => <Friends key={index} name={f.name} img={f.img} /> );

    return (
        <div className={s.sidebarBlock}>
            <h3>My friends</h3>
            <div className={s.friends}>
                { sidebarElement }
            </div>
        </div>
    );
}

export default Sidebar;