import React from 'react';

import {connect} from "react-redux";
import FacilityComponent from "./FacilityComponent/FacilityComponent";

const FacilitiesPage = (props) => {
    const facilities = props.facilities;
    return (
        <>
            <div className="container">
                {   facilities.map(  facility =>  <FacilityComponent  facility = {facility}/>)}
            </div>

        </>
    );
}

let mapStateToProps = (store) => {
    return {
       facilities: store.facilities,
    }
};

const FacilitiesContainer = connect(mapStateToProps, null)(FacilitiesPage)

export default FacilitiesContainer ;