import React, {useEffect, useState} from 'react';

import {connect} from "react-redux";
import {DAL_GetPollsActive} from "../../../../api/api";
import {getActiveVotingThunkCreator} from "../../../../redux/activeVotingsReducer";

const ActiveVoting = (props) => {
    const facilities = props.facilities;
    const [isAuth, setIsAuth] = useState(false)

    useEffect(()=>{
        // DAL_GetPollsActive().then(response => {
        //     if(response.status === 200) {
        //         setIsAuth(true)
        //     }
        //
        //     console.log(response)
        //
        // }).catch((error) => {
        //     // Error
        //     if (error.response) {
        //         console.log(error.response)
        //     } else if (error.request) {
        //         console.log(error.request);
        //     } else {
        //         console.log('Error', error.message);
        //     }
        //
        // });
        props.getActivePools();
    }, [])

    return (
        <>
            <button onClick={props.getActivePools}>get active voting from backend</button>
            <div className="container">
                {/*{   facilities.map(  facility =>  <FacilityComponent key={Date.now()} facility = {facility}/>)}*/}
                {props.activePolls.map( (voting) => {
                    return (
                        <>
                            <div>{voting.id}</div>
                            <hr/>
                            <div>{voting.questions.map((question) => {
                                return(
                                    <div>
                                        {question.description}
                                    </div>
                                )
                            })}</div>
                        </>

                    )
                })}
            </div>

        </>
    );
}

let mapStateToProps = (store) => {
    return {
        activePolls: store.activePolls.activePolls,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getActivePools: () => getActiveVotingThunkCreator(dispatch),
    }
};

const ActiveVotingPage = connect(mapStateToProps, mapDispatchToProps())(ActiveVoting)

export default ActiveVotingPage ;