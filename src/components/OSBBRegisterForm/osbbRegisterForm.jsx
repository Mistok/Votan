import React, {useState} from 'react';


import {requiredField} from "../../utils/validators.js"
import {CustomInput} from "../../common/formControls";
import { Field, reduxForm } from 'redux-form'
import "./osbbRegisterForm.scss"

const osbbRegisterFormContainer = (props) => {

    let handleSubmit = props.handleSubmit;

    let registerOsbbHandler = (values) => {
        console.log(values)
    };

    return (
        <>
            <div className="row justify-content-center mr-0 ml-0">
                <div className="col-12 p-0">

                </div>
                <form
                    onSubmit={handleSubmit(registerOsbbHandler)}
                    name="osbbRegisterForm"
                    className="osbb_register_form_container col-12"
                >
                    <h2 className="auth_form_header align-self-start ">Для реєстрації ОСББ заповніть форму </h2>

                    <div className="row">
                        <div className="col-12 col-md-6 flex-column">
                            <label htmlFor="osbbName">Назва ОСББ</label>
                            <Field
                                className="auth_field osbb_register_form_input"
                                name={'osbbName'}
                                id={'osbbName'}
                                component={CustomInput}
                                type="text"
                                placeholder='Назва ОСББ'
                                validate={[requiredField]}
                            />
                        </div>
                        <div className="col-12 col-md-6 flex-column">
                            <label htmlFor="postalCode">Індекс ОСББ</label>

                            <Field
                                className="auth_field osbb_register_form_input"
                                name={'postalCode'}
                                id={'postalCode'}
                                component={CustomInput}
                                type="text"
                                placeholder='Індекс вашого ОСББ'
                                validate={[requiredField]}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 flex-column">
                            <label htmlFor="city">Місто</label>
                            <Field
                                className="auth_field osbb_register_form_input"
                                name={'city'}
                                id={'city'}
                                component={CustomInput}
                                type="text"
                                placeholder='Місто'
                                validate={[requiredField]}
                            />
                        </div>
                        <div className="col-12 col-md-6 flex-column">
                            <label htmlFor="street">Вулиця</label>

                            <Field
                                className="auth_field osbb_register_form_input"
                                name={'street'}
                                id={'street'}
                                component={CustomInput}
                                type="text"
                                placeholder='Вулиця'
                                validate={[requiredField]}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 flex-column">
                            <label htmlFor="house">Номер будинку</label>
                            <Field
                                className="auth_field osbb_register_form_input"
                                name={'house'}
                                id={'house'}
                                component={CustomInput}
                                type="text"
                                placeholder='Будинок'
                                validate={[requiredField]}
                            />
                        </div>
                        <div className="col-12 col-md-6 flex-column">
                            <label htmlFor="osbbArea">Площа, м<sup><sup>2</sup></sup></label>

                            <Field
                                className="osbb_register_form_input"
                                name={'osbbArea'}
                                id={'osbbArea'}
                                component={CustomInput}
                                type="text"
                                placeholder='Площа будинку'
                                validate={[requiredField]}
                            />
                        </div>
                    </div>
                    <button className="auth_submit btn btn-primary" disabled={props.pristine || props.submitting}>Підтвердити</button>

                </form>
            </div>
        </>
    )
}

const OsbbRegisterReduxForm = reduxForm(
    {form: "osbbRegisterForm"}
)(osbbRegisterFormContainer);

export const OsbbRegisterForm = (props) => {

    return(
        <>
            <OsbbRegisterReduxForm/>
        </>
    )
};