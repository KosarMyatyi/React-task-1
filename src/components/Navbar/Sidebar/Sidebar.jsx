import React from "react";
import s from './Sidebar.module.css';
import Friends from "./Friends/Friends";


const Sidebar = (props) => {

    let sideBarElement = props.friends.map( f => <Friends name={f.name} img={f.img} /> );

    return (
        <div className={s.sideBarBlock}>
            <h3>My friends</h3>
            <div className={s.friends}>
                { sideBarElement }
            </div>
        </div>
    );
}

export default Sidebar;