import React from "react";
import {Field, reduxForm} from "redux-form";

import "./UserAddApartmentModal.scss"
import close from "../../../../img/icon_close.png"
import {CustomInput} from "../../../../common/formControls";
import {keyValidator, requiredField} from "../../../../utils/validators";
import {DAL_AttachApartmentToUser, DAL_CreateNewApartment} from "../../../../api/api";
import {CLIENT_setApartmentAC} from "../../../../redux/CLIENTCabinetReducer";

const AddFacilitiesModalContainer = (props) => {
    return(
        <div  className="add_fac_container" >
            {props.children}
        </div>
    )
}

const userModalKeyForm = (props) => {

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
const UserAddApartmentModal = (props) => {
    const showResultHandler = (props, res) => {
        try{
            if(res.data.id) {
                alert(`Приміщення ${res.data.apartmentName} зареэстровано`)
                props.toggleModal()
            }
        } catch {
            alert(`Помилка ${res.message}`)
        }

    }

    const onSubmit = (ownerKey) => {

        DAL_AttachApartmentToUser(ownerKey.key)
            .then(
                (res) => {
                    showResultHandler(props, res)
                    CLIENT_setApartmentAC(res.data)
                }
        ) .catch(
            error => {
                alert(error.message)
            }
        )
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

// let mapDispatchToProps = (dispatch) => {
//     return  {
//         addNewApartment: () => dispatch()
//     }
// }
export default UserAddApartmentModal;

const ReduxModalKeyForm = reduxForm({form: 'userModalKeyForm'})(userModalKeyForm);

