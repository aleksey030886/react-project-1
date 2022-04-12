import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../img/avatar-men.jpg"
import {NavLink} from "react-router-dom";



const User = ({user, follow, unfollow}) => {
    let u = user;
    return <div>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={style.usersPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button /*disabled={props.followingInProgress.some(id => id === u.id)}*/
                                    onClick={() => {
                                        unfollow(u.id);
                                    }}>UnFollow</button>

                                : <button /*disabled={props.followingInProgress.some(id => id === u.id)}*/
                                    onClick={() => {
                                        follow(u.id);
                                    }}>Follow</button>}

                        </div>
                    </span>
        <span>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        {/*<div>*/}
                        {/*    {u.location.country}*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    {u.location.city}*/}
                        {/*</div>*/}
                    </span>
                </span>
    </div>
}

export default User;