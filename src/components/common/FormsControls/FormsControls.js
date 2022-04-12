import React from "react";
import style from "./FormsControls.module.css"
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";

export const FormControl = ({input, meta: {touched, error}, children, ...props}) => {
    const hasError = touched && error;

    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span> {error} </span>}

        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = {...props};
    return <FormControl {...props}><textarea {...input} {...restProps} /> </FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = {...props};
    return <FormControl {...props}><input {...input} {...restProps} /> </FormControl>
}

export const createField = (component, name, placeholder, validators, props = {}, text = "") => {
    <div>
        <Field component={component} name={name} placeholder={placeholder} validate={validators} {...props}/>{text}
    </div>
}


// export const Input = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;
//
//     return (
//         <div className={style.formControl + " " + (hasError ? style.error : "")}>
//             <div>
//                 <textarea {...input} {...props}/>
//             </div>
//             {hasError && <span> {meta.error} </span>}
//
//         </div>
//     )
// }