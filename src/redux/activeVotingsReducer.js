// Active voting reducer

import {DAL_GetPollsActive, DAL_GetUsersCabinet} from "../api/api";


const SET_ACTIVE_VOTING = 'SET_ACTIVE_VOTING';

let initialState =
    {
        "userCabinet": {
            "userEmail": "test@test.com",
            "osbbs": [
                {
                    "id": 123,
                    "name": "Зарічний",
                    "address": {
                        "house": "5a",
                        "postalCode": "02055",
                        "city": "Київ",
                        "street": "Бажана"
                    },
                    "currentUserApartments": [
                        {
                            "apartmentName": "flat1",
                            "id": 123,
                            "ownerKey": "14572-OSRN",
                            "square": 100
                        }
                    ],
                    "hasUnvotedActivePolls": true
                }
            ],
            "unvotedPollsNumber": 3
        },
        "activePolls": [
            {
                "active": true,
                "id": 123,
                "startDate": "12-04-2020",
                "osbbId": 1,
                "questions": [
                    {
                        "id": 1,
                        "description": "Some question #1 here?",
                        "answer": "YES"
                    }
                ]
            },
            {
                "active": true,
                "id": 124,
                "startDate": "12-04-2020",
                "osbbId": 1,
                "questions": [
                    {
                        "id": 2,
                        "description": "Some question #2 here?",
                        "answer": "YES"
                    }
                ]
            },
            {
                "active": true,
                "id": 125,
                "startDate": "13-04-2020",
                "osbbId": 1,
                "questions": [
                    {
                        "id": 3,
                        "description": "Some question #3 here?",
                        "answer": "YES"
                    }
                ]
            }
        ]
    }


const activeVotingReducer = ( state = initialState, action) => {

    switch (action.type) {

        case SET_ACTIVE_VOTING:
            return {
                ...state,
                ...action.payload,
            };

        default:

            return state;
    }
};

// Actions
export const setActiveVoting  = (voting) => (
    {type: SET_ACTIVE_VOTING, payload: voting});

export const  getActiveVotingThunkCreator = (dispatch) => {
    return (dispatch) => {
        debugger
        console.log('getting active voting')
        // dispatch(toggleIsFetchingAC(true))
        debugger
        DAL_GetPollsActive()
            .then(
                res => {
                    console.log(res)
                    return dispatch(setActiveVoting(res))
                }
            )
            .catch(
                (error) => {
                    if (error.response) {
                        console.log(error.response)
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                    console.log('error receiving active voting ')
                    dispatch(setActiveVoting(initialState))
                }
            )
    }

}



export default activeVotingReducer;