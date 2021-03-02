import React, {useState} from 'react';
import {NavLink, Redirect} from "react-router-dom";
import {reduxForm, Field} from "redux-form";
import {requiredField, confirmPass} from "../../utils/validators.js"
import {CustomInput} from "../../common/formControls";

import "./AuthPage.scss";
import {DAL_Login, DAL_Registration} from "../../api/api";
import {emailValidator} from "../../utils/validators";

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

export const Login = (props) => {

    const [loginError, setLoginError] = useState(null)
    const [isAuth, setIsAuth] = useState(false)

    let handleSubmit = props.handleSubmit;

    let signInHandler = (values) => {
        console.log(values);
        DAL_Login(values).then(response => {
            if(response.status === 200) {
                setIsAuth(true)
            }
            console.log(isAuth)
            console.log(response.data.token)

            deleteAllCookies()
            document.cookie = `token=${response.data.token}`

        }).catch((error) => {
            // Error
            if (error.response) {
                console.log(error.response)
                setLoginError(error.response.data.message)

            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }

        });
    };

    if(isAuth) {return <Redirect to="../account/"/>}

    return(
        <>
            <div className="row justify-content-center mr-0 ml-0">
                <div className="col-12 p-0">
                    <h2 className="auth_form_header align-self-start ">Вхід</h2>
                </div>
                <form
                     onSubmit={handleSubmit(signInHandler)}
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
                <div>
                    <button className="auth_submit btn btn-primary" disabled={props.pristine || props.submitting}>Увійти</button>
                </div>
                    {loginError &&
                        <div
                            className="field_error_text"
                        >
                            {loginError}

                        </div>
                    }
                <div className="forgot_password">Забули пароль ?</div>

                 <hr className="auth_hr"/>

                    <NavLink
                        className="auth_nav_link auth_submit btn btn-primary"
                        activeClassName={'registration_nav_link_active'}
                        to={`/main/registration`}>Створити акаунт</NavLink>
                </form>

        </div>

        </>
    )
};

export const LoginReduxForm = reduxForm( {form: "logIn"})(Login);

const Register = (props) => {

    let handleSubmit = props.handleSubmit;

    let registerHandler = (values) => {
        let valuesCopy = {...values}

        valuesCopy.roles = [{'role': values.role}]
        delete (valuesCopy.role)
        console.log(valuesCopy)
        DAL_Registration(valuesCopy).then(response => {
            console.log(response.data.token)
            document.cookie = `token=null`
            document.cookie = `token=${response.data.token}`
        })
    };
    return(
        <>
            <div className="row justify-content-center mr-0 ml-0">
                <div className="col-12 p-0">
                    <h2 className="auth_form_header align-self-start ">Реєстрація</h2>
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
                    <div>
                        <div className="auth_role_container">
                            <label><Field name="role" component={"input"} type="radio" value="{id: 2, role: CLIENT}"/> Власник</label>
                            <label><Field name="role" component={"input"} type="radio" value="OSBB"/> ОСМД</label>
                        </div>
                    </div>

                    <button className="auth_submit btn btn-primary" disabled={props.pristine || props.submitting}>Зареєструватися</button>

                    <hr className="auth_hr"/>

                    <NavLink
                        className="auth_submit btn btn-primary"
                        activeClassName={'registration_nav_link_active'}
                        to={`/main/login`}>Увійти в акаунт</NavLink>
                </form>
            </div>
        </>
    )
};

export const RegisterReduxForm =  reduxForm(
    {form: "register"}
)(Register);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

// const AuthPageContainer = connect(mapStateToProps, null)(AuthPage);
// export default AuthPageContainer;