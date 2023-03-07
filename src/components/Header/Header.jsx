import React from "react";
import s from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src='https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr' />
      <div className={s.loginBlock}>
        {props.isAuth
          ? <div> {props.login} - <button onClick={props.logout}>Log out</button> </div>
          : <NavLink to='/login'>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;