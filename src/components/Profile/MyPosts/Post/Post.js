import React from "react";
import style from './Post.module.css';
import lion from './../../../../img/lion.jpg'

const Post = (props) => {
    return (
        <div className={style.post}>
            <div><img src={lion}/></div>
            <div>
                {props.message}
            </div>
            <div>
                <span>Like {props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post;