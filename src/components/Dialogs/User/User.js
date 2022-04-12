import React from "react";
import style from './User.module.css';
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div className={`${style.user} ${style.active}`}>
            <NavLink to={"/dialogs/" + props.id}>{props.name} </NavLink>
        </div>
    )
}

export default User;