import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";


import "./newVotingDraft.scss"
import {DAL_CreateNewVoting, DAL_GetPollsDraft} from "../../../../api/api";
import NewVotingComponent from "../NevVotingComponent/NewVotingComponent";

export const NewVotingDraft = (props) => {

    const [drafts, setDrafts] = useState([
        {
            "id": 1,
            "startDate": "2021-12-19",
            "questions": [
                {
                    "description": "string",
                    "id": 1
                }
            ]
        }
    ])
    let clickHandler = () =>{
        let savedDrafts = DAL_GetPollsDraft()
        setDrafts([...drafts, savedDrafts])
        console.log(drafts)
    }
    useEffect(()=>{
        let savedDrafts = DAL_GetPollsDraft()
        setDrafts([...drafts, savedDrafts])
    },[])

    return (
        <>
            <h2 className="voting_drafts_header" >Чернетка</h2>
            <div className="btn btn-secondary mb-2" onClick={clickHandler}>get drafts manually</div>
            <NewVotingComponent props={drafts}/>
        </>
    );
}
//
// NewVotingComponent = connect(
//     state => ({
//         initialValues: drafts
//     }), {}
// )


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        role: state.auth.role,
        cabinet: state.cabinet,
        newVotingForm: state.newVotingForm
    }
}
export default connect(mapStateToProps, null)(NewVotingDraft);