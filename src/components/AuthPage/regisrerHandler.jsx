import React from 'react';
import {connect} from "react-redux";
import {DAL_Registration_OSBB} from "../../api/api";

export const RegisterOSBBHandler = (props) => {
    // Функция собирае данные из двух разных форм,
    // необходимые для формирования запроса на регистрацию ОСББ

    let registerHandlerFunction = () => {
        let valuesCopy = Object.assign(props.osbb1.values, props.osbb2.values)
        delete valuesCopy.confirmed

        DAL_Registration_OSBB(valuesCopy).then(response => {
            console.log(response)
        })
    };
    return(
        <>
            <button
                className="btn btn-primary mt-4 auth_submit"
                disabled={ props.valid }
                onClick={registerHandlerFunction} >
                Зареєструвати ОСББ
            </button>
        </>
    )
}
const mapStateToProps = (state) => {
    return{
        osbb1: state.form.osbbRegisterForm,
        osbb2: state.form.registerOSBB
    }
}

export default connect(mapStateToProps, null)(RegisterOSBBHandler)
