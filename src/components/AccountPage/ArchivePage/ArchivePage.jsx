import React from 'react';

import {connect} from "react-redux";
import FacilityComponent from "../FacilitiesPage/FacilityComponent/FacilityComponent";

const ArchivePage = (props) => {
    const facilities = props.facilities;
    return (
        <>
            <div className="container">
                {   facilities.map(  facility =>  (
                    <>
                        <FacilityComponent key={Date.now()} facility = {facility}/>
                        <div className="archive_info_container">
                            <div className="container">
                                <div className="row">
                                    <span className="">status </span>
                                    <span>{'propsStatusInfo'}</span>
                                </div>
                                <div className="row">
                                    <span className="">status</span>
                                    <span>{'propsStatusInfo'}</span>
                                </div>
                            </div>
                        </div>
                    </>
                    ))}
            </div>

        </>
    );
}

let mapStateToProps = (store) => {
    return {
        facilities: store.facilities,
    }
};

const ArchiveVotingContainer = connect(mapStateToProps, null)(ArchivePage)

export default ArchiveVotingContainer;