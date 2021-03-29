import React from "react";
import {Field, reduxForm} from "redux-form";

import "./OSBBAddApartrmentModal.scss"
import close from "../../../../img/icon_close.png"
import {CustomInput} from "../../../../common/formControls";
import { requiredField} from "../../../../utils/validators";

import { OSBBSCreateApartmentTC} from "../../../../redux/OSBBCabinetReducer";
import {connect} from "react-redux";

const OSBBAddApartmentModalContainer = (props) => {
    return(
        <div  className="add_fac_container" >
            {props.children}
        </div>
    )
}

const OSBBModalKeyForm = (props) => {
    // const addApartmentHandler = (newApartmentOptions) => {
    //     debugger
    //     OSBBSCreateApartmentTC(newApartmentOptions)
    // }
    return(
        <form
            name="modalKeyForm"
            className="row flex-column justify-content-center"
            onSubmit={props.handleSubmit}>
            <Field
                className="add_fac_modal_input align-self-auto"
                name={'apartmentName'}
                component={CustomInput}
                type="text"
                placeholder='Назва приміщення'
                validate={[requiredField]}
            />
            <Field
                className="add_fac_modal_input align-self-auto"
                name={'square'}
                component={CustomInput}
                type="text"
                placeholder='Площа приміщення'
                validate={[requiredField]}
            />

            <div className="row justify-content-center">
                <input
                    type="submit"
                    className="add_fac_modal_submit btn btn-primary align-self-auto "
                    value="Додати приміщення"/>
            </div>


        </form>
    )
}
const OSBBAddApartmentModal = (props) => {
    const onSubmitHandler = (newApartmentOptions) => {
        props.addNewApartment(newApartmentOptions)

    }

    return (
        <OSBBAddApartmentModalContainer toggleModal={props.toggleModal}>
            <div className="add_fac_modal_container">
                <h1 className="add_fac_modal_container_header">Введіть данні приміщення</h1>
                <ReduxModalKeyForm onSubmit={onSubmitHandler}/>
                <button className="add_fac_close" onClick={(event)=>{props.toggleModal(event)}}>
                    <img src={close} alt="close"/>
                </button>
            </div>
        </OSBBAddApartmentModalContainer>
    )
}

let mapDispatchToProps = (dispatch) => {
    return  {
        addNewApartment: (newApartmentOptions) => dispatch(OSBBSCreateApartmentTC(newApartmentOptions))
    }
}
export default connect(null, mapDispatchToProps)(OSBBAddApartmentModal);

const ReduxModalKeyForm = reduxForm({form: 'OSBBModalKeyForm'})(OSBBModalKeyForm);

