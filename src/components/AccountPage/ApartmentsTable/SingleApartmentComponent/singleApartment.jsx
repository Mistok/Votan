import React from 'react';

import "./singleApartment.scss";
import icon_options from "../../../../img/icon_options.png";
import {
    OSBBSDeleteApartmentTC,
    OSBBGenerateApartmentKeyTC,
} from "../../../../redux/OSBBCabinetReducer";

import {connect} from "react-redux";

const SingleApartment = (props) => {
    let ap = {...props.apatrment}
    const generateKey = (e) => {
        props.generateApartmentKey(e.currentTarget.dataset.apartment_id)
    }
    const deleteApartment = (e) => {
        props.OSBBSDeleteApartmentTC(e.currentTarget.dataset.apartment_id)
    }
    return (
        <>
            <tr>
                {/*<th scope="row">{number}</th>*/}

                <td className="apartments_table_cel text-left">{ap.apartmentName}</td>
                <td className="apartments_table_cel">{ap.square} м <sup>2</sup></td>
                <td className="apartments_table_cel">{ap.ownerKey ? ap.ownerKey : 'відсутній'}</td>
                <td className="apartments_table_cel">
                    <button className="btn btn-primary" data-apartment_id={ap.id} onClick={ generateKey }>Згенерувати</button>
                </td>
                <td className="apartments_table_cel" ><img src={icon_options} alt="options" data-apartment_id={ap.id} onClick={deleteApartment}/></td>
            </tr>
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({

    generateApartmentKey: (apartmentId) => dispatch( OSBBGenerateApartmentKeyTC(apartmentId) ),
    OSBBSDeleteApartmentTC: (apartmentId) => dispatch( OSBBSDeleteApartmentTC(apartmentId) )

})

export default connect(null, mapDispatchToProps)(SingleApartment);