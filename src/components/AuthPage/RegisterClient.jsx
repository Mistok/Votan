import {DAL_Registration_client} from "../../api/api";
import {Field, reduxForm} from "redux-form";
import {CustomInput} from "../../common/formControls";
import {confirmPass, emailValidator, requiredField} from "../../utils/validators";
import {NavLink, Redirect, useRouteMatch} from "react-router-dom";
import React, {useState} from "react";

const RegisterClientContainer = (props) => {
    const [redirectNeeded, setRedirectNeeded] = useState(false)
    let handleSubmit = props.handleSubmit;
    let { path, url } = useRouteMatch();
    let registerHandler = (values) => {
        let valuesCopy = {...values}
        delete (valuesCopy.confirmed)

        debugger
        DAL_Registration_client(valuesCopy)
            .then(
                (response) => {
                    console.log(response)
                    if(response.status === 200 || response.status === 201){
                        alert('Підтвердіть авторизацію за посиланням на ваш e-mail')
                        return(setRedirectNeeded(true))
                    }
                        else alert(`Помилка ${response.message}`)
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                    alert(`Помилка ${error.message}`)
                    console.log(error.message)
                }
            )

    };
    console.log('ssssssss')
    console.log(props)
    console.log('ssssssss')
    return(
        <>
            { redirectNeeded ? <Redirect to="../../login"/> : ''}
            <div className="row justify-content-center mr-0 ml-0">
                <div className="col-12 p-0">
                    <h2 className="auth_form_header align-self-start ">Реєстрація користувача</h2>
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

                    <Field
                        className="auth_field"
                        name={'confirmed'}
                        id={'confirm_password'}
                        component={CustomInput}
                        type="password"
                        placeholder='Повторити пароль'
                        validate={[requiredField, confirmPass]}
                    />

                    <button className="auth_submit btn btn-primary" disabled={props.pristine || props.submitting }>Зареєструватися</button>

                    <hr className="auth_hr"/>

                    <NavLink
                        className="auth_submit btn btn-primary"
                        activeClassName={'registration_nav_link_active'}
                        to={`../../main/login`}>Увійти в акаунт</NavLink>
                </form>
            </div>
        </>
    )
};

export const RegisterClient =  reduxForm(
    {form: "registerClient"}
)(RegisterClientContainer);