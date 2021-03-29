import React, {useState} from 'react';
import {NavLink, Redirect} from "react-router-dom";
import {reduxForm, Field} from "redux-form";
import {requiredField} from "../../utils/validators.js"
import {CustomInput} from "../../common/formControls";

import "./AuthPage.scss";
import {DAL_Login} from "../../api/api";
import {emailValidator} from "../../utils/validators";
import {logIn, settingRole} from "../../redux/authReducer";
import {connect} from "react-redux";
import {useRouteMatch} from "react-router";


export const Login = (props) => {

    const [loginError, setLoginError] = useState(null)
    const [isAuth, setIsAuth] = useState(false)
    let { path, url } = useRouteMatch();
    let handleSubmit = props.handleSubmit;

    let signInHandler = (values) => {

        DAL_Login(values)
            .then(response => {

            console.log(response.data.token)
            sessionStorage.setItem('role', response.data.roles[0].role)
            sessionStorage.setItem('token', response.data.token)

            props.settingRole(response.data.roles[0].role)

            if(response.status === 200) {
                setTimeout(() => setIsAuth(true), 2000)
            }

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

    if(isAuth) {return <Redirect to="../account"/>}

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
                        to={`../main/registration`}>Створити акаунт</NavLink>
                </form>

        </div>

        </>
    )
};

const LogInContainer = (props) => {

    return(
        <LoginReduxForm logIn={props.logIn} auth={props.auth} settingRole={props.settingRole}/>
    )
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth,
        isFetching: state.auth.isFetching,
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        logIn: (values) => {dispatch(logIn(values))},
        settingRole: (role) => {dispatch(settingRole(role))},

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LogInContainer);

export const LoginReduxForm = reduxForm( {form: "logIn"})(Login);

