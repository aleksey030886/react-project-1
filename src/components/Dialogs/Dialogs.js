import React from "react";
import style from './Dialogs.module.css';
import User from "./User/User";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {

    const onSubmit = (values) => {
        props.sendMessageClick(values.newMessageBody);
    }

    let usersElements = props.dialogsPage.users.map( user => <User id={user.id} name={user.name} />);
    let messagesElements = props.dialogsPage.messages.map( mes => <Message id={mes.id} message={mes.message} />);

    return (
        <div className={style.dialogs}>
            <div>
                {usersElements}
            </div>
            <div>
                <div>{messagesElements}</div>
                <div>
                    <MessageReduxForm onSubmit={onSubmit} />
                </div>

            </div>
        </div>
    )

}

const maxLength50 = maxLengthCreator(50);

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newMessageBody"} placeholder={"Enter message"} validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(MessageForm);

export default Dialogs;