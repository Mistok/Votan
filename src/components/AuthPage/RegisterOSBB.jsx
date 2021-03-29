import React, {useState} from 'react';
import { DAL_Registration_OSBB} from "../../api/api";
import {Field, reduxForm} from "redux-form";
import {CustomInput} from "../../common/formControls";
import {confirmPass, emailValidator, requiredField} from "../../utils/validators";
import {NavLink} from "react-router-dom";
import RegisterOSBBHandler from "./regisrerHandler";

const RegisterOSBBContainer = (props) => {

    let handleSubmit = props.handleSubmit;
    let [registerError, setRegisterError] = useState(false);

    let registerHandler = (values) => {
        console.log(props.osbb)
        // !props.osbb ? "Заповн" : '';
        let valuesCopy = Object.assign(values, props.osbb);

        delete valuesCopy.confirmed
        console.log(valuesCopy)
        DAL_Registration_OSBB(valuesCopy)
            .then(
                response => {
                    console.log(response.data.token)
                }
            ).catch(

                error => {
                    alert(error.message)
                    setRegisterError(error.message)
                }
        )
    };


    return(
        <>
            <div className="row justify-content-center mr-0 ml-0">
                <div className="col-12 p-0">
                    <h2 className="auth_form_header align-self-start ">Реєстрація ОСББ</h2>
                </div>
                <form
                    onSubmit={handleSubmit(registerHandler)}
                    className="auth_form_container col-12"
                >
                    <Field
                        className="auth_field"
                        name={'email'}
                        id={'email'}
                        component={CustomInput}
                        type="text"
                        placeholder='Електронна адреса'
                        validate={[requiredField, emailValidator]}
                    />

                    <Field
                        className="auth_field"
                        name={'password'}
                        id={'password'}
                        component={CustomInput}
                        type="password"
                        placeholder='Пароль'
                        validate={[requiredField]}
                    />
                    { registerError
                        ? <div className="field_error_text"> {registerError} </div>
                        : ''
                    }
                    <Field
                        className="auth_field"
                        name={'confirmed'}
                        id={'confirm_password'}
                        component={CustomInput}
                        type="password"
                        placeholder='Повторити пароль'
                        validate={[requiredField, confirmPass]}
                    />

                    {/*<button className="auth_submit btn btn-primary" disabled={props.pristine || props.submitting}>Зареєструватися</button>*/}
                    <RegisterOSBBHandler pristine = { props.pristine }  submitting = { props.submitting } valid = { !props.valid } />
                    <hr className="auth_hr"/>

                    <NavLink
                        className="auth_submit btn btn-primary"
                        activeClassName={'registration_nav_link_active'}
                        to={`../../main/login`}>Увійти в акаунт</NavLink>
                </form>
                <hr className="auth_hr"/>

            </div>
        </>
    )
};

export const RegisterOSBB =  reduxForm(
    {form: "registerOSBB"}
)(RegisterOSBBContainer);

