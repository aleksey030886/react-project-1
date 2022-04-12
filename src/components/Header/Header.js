import React from 'react';
import logo from "../../img/logo.jpg";
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <a href="/"><img src={logo} /></a>
            <div className={style.loginBlock} >
                { props.isAuth
                    ? <div>{props.login} <button onClick={props.logout}>Log Out</button></div>
                    : <NavLink to={"/login"}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header;