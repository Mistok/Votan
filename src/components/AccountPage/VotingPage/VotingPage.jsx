import React from 'react';
import FacilitiesContainer from "../FacilitiesPage/FacilitiesPage";
import {connect} from "react-redux";
import {  Route, useRouteMatch } from "react-router-dom";
import NewVotingComponent from "./NevVotingComponent/NewVotingComponent";

import {NewVotingDraft} from "./NewVotingDraft/NewVotingDraft";
import ArchiveVotingContainer from "../ArchivePage/ArchivePage";
import ActiveVotingPage from "./ActiveVotingPage/AtiveVotingPage";


const VotingPage = (props) => {
    let {path, url} = useRouteMatch()
    return (
        <>
            {/*<Route path={`${path}/active`} component={FacilitiesContainer}/>*/}
            <Route path={`${path}/active`} component={ActiveVotingPage}/>
            <Route path={`${path}/archive`} component={ArchiveVotingContainer}/>
            <Route path={`${path}/new`} component={NewVotingComponent}/>
            <Route path={`${path}/draft`} component={NewVotingDraft}/>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        role: state.auth.role,
        cabinet: state.cabinet
    }
}
export default connect(mapStateToProps, null)(VotingPage);