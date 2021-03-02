import React from "react";
import styles from "./formControls.module.scss"

export const CustomInput = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <input {...input} {...meta} {...props} className={props.className + " " + styles.form_control + " " + ( hasError ? styles.error_input :  " ")  }/>
            { hasError ? <span className={`${styles.error_message}`}>{meta.error}</span>: ' '}
        </div>
    )
};

export const CustomTextArea = ({ input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return(
    <div>
        <textarea {...input}  {...meta} {...props} className={props.className + " " + styles.form_control + " " + ( hasError ? styles.error_input :  " ") } />
            { hasError ? <span className={`${styles.error_message}`}>{meta.error}</span>: ' '}
    </div>
    )
};

