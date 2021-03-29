import React, {useState} from 'react';


import {requiredField} from "../../../utils/validators.js"
import {CustomInput} from "../../../common/formControls";
import { Field, reduxForm } from 'redux-form'
import "./osbbRegisterForm.scss"
import {DAL_RegisterNewOSBB} from "../../../api/api";


const addressFormContainer = () => {

    return (
        <>
            <div className="col-12 col-md-6 flex-column">
                <label htmlFor="postalCode">Індекс ОСББ</label>

                <Field
                    className="auth_field osbb_register_form_input"
                    name={'address.postalCode'}
                    id={'postalCode'}
                    component={CustomInput}
                    type="text"
                    placeholder='Індекс вашого ОСББ'
                    validate={[requiredField]}
                />
            </div>
            <div className="col-12 col-md-6 flex-column">
                <label htmlFor="city">Місто</label>
                <Field
                    className="auth_field osbb_register_form_input"
                    name={'address.city'}
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
                    name={'address.street'}
                    id={'street'}
                    component={CustomInput}
                    type="text"
                    placeholder='Вулиця'
                    validate={[requiredField]}
                />
            </div>
            <div className="col-12 col-md-6 flex-column">
                <label htmlFor="house">Номер будинку</label>
                <Field
                    className="auth_field osbb_register_form_input"
                    name={'address.house'}
                    id={'house'}
                    component={CustomInput}
                    type="text"
                    placeholder='Будинок'
                    validate={[requiredField]}
                />
            </div>
        </>
    )
}


const osbbRegisterFormContainer = (props) => {

    let handleSubmit = props.handleSubmit;

    let registerOsbbHandler = (values) => {
        console.log(values)
        // DAL_RegisterNewOSBB(values).then(
        //     (response) => console.log(`New OSBB register response ${response}`)
        // )
    };

    return (
        <>
            <div className="row account_info">
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
                            name={'name'}
                            id={'name'}
                            component={CustomInput}
                            type="text"
                            placeholder='Назва ОСББ'
                            validate={[requiredField]}
                       />
                   </div>
                       <Field
                            name={'address'}
                            id={'address'}
                            component={addressFormContainer}
                       />
                       <div className="col-12 col-md-6 flex-column">
                           <label htmlFor="osbbArea">Площа, м<sup><sup>2</sup></sup></label>
                           <Field
                                className="osbb_register_form_input"
                                name={'totalSquare'}
                                id={'totalSquare'}
                                component={CustomInput}
                                type="text"
                                placeholder='Площа будинку'
                                validate={[requiredField]}
                           />
                       </div>
                       <div className="col-12 col-md-6 flex-column">
                           <label htmlFor="osbbArea">Кількість квартир</label>
                           <Field
                                className="osbb_register_form_input"
                                name={'apartmentsNumber'}
                                id={'apartmentsNumber'}
                                component={CustomInput}
                                type="text"
                                placeholder='Кількість квартир'
                                validate={[requiredField]}
                           />
                        </div>
                   </div>
                   {/*<button className="auth_submit btn btn-primary" disabled={props.pristine || props.submitting}>Підтвердити</button>*/}
               </form>
            </div>
        </>
    )
}

const OsbbRegisterReduxForm = reduxForm(
    {form: "osbbRegisterForm"}
)(osbbRegisterFormContainer);

export const OSBBRegisterForm = (props) => {
    console.log(props.osbb)
    return(
        <>
            <OsbbRegisterReduxForm/>
        </>
    )
};