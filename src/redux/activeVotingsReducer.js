// Active voting reducer

import {DAL_GetPollsActive} from "../api/api";


const SET_ACTIVE_VOTING = 'SET_ACTIVE_VOTING';

let initialState =
    {
        "totalPollsNumber": 12,
        "currentPage": 1,
        "pageSize": 5,
        "currentUserOsbbs": [
            {
                "id": 234,
                "osbbDto": {
                    "address": {
                        "house": "5a",
                        "postalCode": "02055",
                        "city": "Київ",
                        "street": "Бажана"
                    },
                    "apartments": [
                        {
                            "apartmentName": "string",
                            "id": 0,
                            "osbb": {
                                "accountNonExpired": true,
                                "accountNonLocked": true,
                                "address": {
                                    "city": "string",
                                    "house": "string",
                                    "id": 0,
                                    "postalCode": "string",
                                    "street": "string"
                                },
                                "apartments": [
                                    null
                                ],
                                "apartmentsNumber": 0,
                                "authorities": [
                                    {
                                        "authority": "string"
                                    }
                                ],
                                "confirmed": true,
                                "credentialsNonExpired": true,
                                "email": "string",
                                "enabled": true,
                                "id": 0,
                                "name": "string",
                                "password": "string",
                                "polls": [
                                    {
                                        "active": true,
                                        "id": 0,
                                        "questions": [
                                            {
                                                "description": "string",
                                                "id": 0
                                            }
                                        ],
                                        "startDate": "string"
                                    }
                                ],
                                "roles": [
                                    {
                                        "id": 0,
                                        "role": "CLIENT"
                                    }
                                ],
                                "totalSquare": 0,
                                "username": "string"
                            },
                            "ownerKey": "string",
                            "square": 0,
                            "user": {
                                "accountNonExpired": true,
                                "accountNonLocked": true,
                                "apartments": [
                                    null
                                ],
                                "authorities": [
                                    {
                                        "authority": "string"
                                    }
                                ],
                                "confirmed": true,
                                "credentialsNonExpired": true,
                                "email": "string",
                                "enabled": true,
                                "id": 0,
                                "password": "string",
                                "roles": [
                                    {
                                        "id": 0,
                                        "role": "CLIENT"
                                    }
                                ],
                                "username": "string"
                            }
                        }
                    ],
                    "apartmentsNumber": 0,
                    "confirmed": true,
                    "email": "Ivanov@mail.com",
                    "name": "not null",
                    "roles": [
                        {
                            "id": 0,
                            "role": "CLIENT"
                        }
                    ],
                    "totalSquare": 0,
                    "id": 124
                },
                "currentUserApartments": [
                    {
                        "apartmentName": "flat1",
                        "id": 123,
                        "ownerKey": "14572-OSRN",
                        "square": 100
                    }
                ]
            }
        ],
        "polls": [
            {
                "active": true,
                "startDate": "12-04-2020",
                "numberOfApartmentsVoted": 87,
                "osbbId": 123,
                "questions": [
                    {
                        "questionDto": {
                            "description": "питання 1",
                            "id": 1
                        },
                        "answersPercentageByCountMethod": {
                            "YES": {
                                "BY_APARTMENTS": 100,
                                "BY_SQUARE": 35
                            },
                            "ABSTAIN": {
                                "BY_APARTMENTS": 0,
                                "BY_SQUARE": 0
                            },
                            "NO": {
                                "BY_APARTMENTS": 0,
                                "BY_SQUARE": 0
                            }
                        }
                    },
                    {
                        "questionDto": {
                            "description": "питання 2",
                            "id": 2
                        },
                        "answersPercentageByCountMethod": {
                            "YES": {
                                "BY_APARTMENTS": 100,
                                "BY_SQUARE": 35
                            },
                            "ABSTAIN": {
                                "BY_APARTMENTS": 0,
                                "BY_SQUARE": 0
                            },
                            "NO": {
                                "BY_APARTMENTS": 0,
                                "BY_SQUARE": 0
                            }
                        }
                    },
                    {
                        "questionDto": {
                            "description": "питанн 3",
                            "id": 3
                        },
                        "answersPercentageByCountMethod": {
                            "YES": {
                                "BY_APARTMENTS": 100,
                                "BY_SQUARE": 35
                            },
                            "ABSTAIN": {
                                "BY_APARTMENTS": 0,
                                "BY_SQUARE": 0
                            },
                            "NO": {
                                "BY_APARTMENTS": 0,
                                "BY_SQUARE": 0
                            }
                        }
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
        // console.log('getting active voting')
        // dispatch(toggleIsFetchingAC(true))
        DAL_GetPollsActive()
            .then(
                res => {
                    // console.log(res)
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