import React from "react";
import {Field, reduxForm} from "redux-form";

import "./AddFacilitiesModal.scss"
import close from "../../../img/icon_close.png"
import {CustomInput} from "../../../common/formControls";
import {keyValidator, requiredField} from "../../../utils/validators";

const AddFacilitiesModalContainer = (props) => {
    return(
        <div  className="add_fac_container" >
            {props.children}
        </div>
    )
}

const modalKeyForm = (props) => {

    return(
        <form
            name="modalKeyForm"
            className="row flex-column justify-content-center"
            onSubmit={props.handleSubmit}>
            <Field
                className="add_fac_modal_input align-self-auto"
                name={'key'}
                component={CustomInput}
                type="text"
                placeholder='ключ'
                validate={[requiredField, keyValidator]}
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
const AddFacilitiesModal = (props) => {
    const onSubmit = (formData) => {

        console.log(formData)
    }
    return (
        <AddFacilitiesModalContainer toggleModal={props.toggleModal}>
            <div className="add_fac_modal_container">
                <h1 className="add_fac_modal_container_header">Введіть ключ приміщення</h1>
                <ReduxModalKeyForm onSubmit={onSubmit}/>
                <button className="add_fac_close" onClick={(event)=>{props.toggleModal(event)}}>
                    <img src={close} alt="close"/>
                </button>
            </div>
        </AddFacilitiesModalContainer>
    )
}
export default AddFacilitiesModal;

const ReduxModalKeyForm = reduxForm({form: 'modalKeyForm'})(modalKeyForm);

