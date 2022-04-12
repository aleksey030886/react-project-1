import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"

const Login = (login, isAuth) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.isAuth)
    }

    // редирект с логина на профиле
    if (!isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h3>Login</h3>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const maxLength6 = maxLengthCreator(66)

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Input} name={"email"} placeholder={"Email"} validate={[required, maxLength6]} />
            </div>
            <div>
                <Field component={Input} name={"password"} placeholder={"Password"} validate={[required, maxLength6]} type={"password"}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"} validate={[required, maxLength6]} /> remember me
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Log IN</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

export default Login;