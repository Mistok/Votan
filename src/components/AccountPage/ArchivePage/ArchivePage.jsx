import React from 'react';

import {connect} from "react-redux";
import SingleApartment from "../ApartmentsTable/SingleApartmentComponent/singleApartment";

const ArchivePage = (props) => {
    return (
        <>
            <div className="container">

            </div>

        </>
    );
}

let mapStateToProps = (store) => {
    return {
        voting: store.voting,
    }
};

const ArchiveVotingContainer = connect(mapStateToProps, null)(ArchivePage)

export default ArchiveVotingContainer;