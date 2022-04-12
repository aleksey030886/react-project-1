import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            New Post
            <div>
                <Field component={Textarea} name={"newPostText"} validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const MyPostReduxForm = reduxForm ({
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm);

const MyPosts = (props) => {

    let postsElements = props.postData.map( post => <Post id={post.id} message={post.message} likeCount={post.likeCount} />);

    let newPostElement = React.createRef();

    const addNewPost = (values) => {
        props.addNewPostText(values.newPostText);
    }

    return (
        <div className={style.posts}>
            <h3>My posts</h3>
                <MyPostReduxForm onSubmit={addNewPost} />
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
