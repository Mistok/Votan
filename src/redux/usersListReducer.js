// usersList reducer

import {toggleIsFetchingAC} from "./authReducer";
import { DAL_GetUsersList} from "../api/api";

const SET_USERS_LIST = 'SET_USERS_LIST';
const DELETE_USER = 'DELETE_USER';


let initialState =  [
    {
        "apartments": [
            {
                "apartmentName": "string",
                "id": 0,
                "osbb": {
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
                    "confirmed": true,
                    "email": "string",
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
                    "totalSquare": 0
                },
                "ownerKey": "string",
                "square": 55,
                "user": {
                    "apartments": [
                        null
                    ],
                    "confirmed": true,
                    "email": "string",
                    "id": 0,
                    "password": "string",
                    "roles": [
                        {
                            "id": 0,
                            "role": "CLIENT"
                        }
                    ]
                }
            }
        ],
        "confirmed": true,
        "email": "Ivanov@mail.com",
        "roles": [
            {
                "id": 0,
                "role": "CLIENT"
            }
        ],
        "id": 124
    },
    {
        "apartments": [
            {
                "apartmentName": "string",
                "id": 0,
                "osbb": {
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
                    "confirmed": true,
                    "email": "string",
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
                    "totalSquare": 0
                },
                "ownerKey": "string",
                "square": 99,
                "user": {
                    "apartments": [
                        null
                    ],
                    "confirmed": true,
                    "email": "string",
                    "id": 0,
                    "password": "string",
                    "roles": [
                        {
                            "id": 0,
                            "role": "CLIENT"
                        }
                    ]
                }
            }
        ],
        "confirmed": true,
        "email": "Petrov@mail.com",
        "roles": [
            {
                "id": 0,
                "role": "CLIENT"
            }
        ],
        "id": 125
    },
    {
        "apartments": [
            {
                "apartmentName": "string",
                "id": 0,
                "osbb": {
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
                    "confirmed": true,
                    "email": "string",
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
                    "totalSquare": 0
                },
                "ownerKey": "string",
                "square": 80,
                "user": {
                    "apartments": [
                        null
                    ],
                    "confirmed": true,
                    "email": "string",
                    "id": 0,
                    "password": "string",
                    "roles": [
                        {
                            "id": 0,
                            "role": "CLIENT"
                        }
                    ]
                }
            }
        ],
        "confirmed": true,
        "email": "Sidorov@mail.com",
        "roles": [
            {
                "id": 0,
                "role": "CLIENT"
            }
        ],
        "id": 126
    },
    {
        "apartments": [
            {
                "apartmentName": "string",
                "id": 0,
                "osbb": {
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
                    "confirmed": true,
                    "email": "string",
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
                    "totalSquare": 0
                },
                "ownerKey": "string",
                "square": 180,
                "user": {
                    "apartments": [
                        null
                    ],
                    "confirmed": true,
                    "email": "string",
                    "id": 0,
                    "password": "string",
                    "roles": [
                        {
                            "id": 0,
                            "role": "CLIENT"
                        }
                    ]
                }
            }
        ],
        "confirmed": true,
        "email": "Efremov@mail.com",
        "roles": [
            {
                "id": 0,
                "role": "CLIENT"
            }
        ],
        "id": 127
    },
    {
        "apartments": [
            {
                "apartmentName": "string",
                "id": 0,
                "osbb": {
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
                    "confirmed": true,
                    "email": "string",
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
                    "totalSquare": 0
                },
                "ownerKey": "string",
                "square": 78,
                "user": {
                    "apartments": [
                        null
                    ],
                    "confirmed": true,
                    "email": "string",
                    "id": 0,
                    "password": "string",
                    "roles": [
                        {
                            "id": 0,
                            "role": "CLIENT"
                        }
                    ]
                }
            }
        ],
        "confirmed": true,
        "email": "Azazadze@mail.com",
        "roles": [
            {
                "id": 0,
                "role": "CLIENT"
            }
        ],
        "id": 128
    }
]


const usersListReducer = ( state = initialState, action) => {

    switch (action.type) {

        case SET_USERS_LIST:
            console.log(action.payload)
            return {
                ...state,
                ...action.payload,
            };
        case DELETE_USER:
            console.log(`deleting user #: ${action.payload} `)
            return state.filter( user => user.id !== action.payload  ) ;
        default:
            return state;
    }
};


// Actions
 const set_users_list  = (values) => (
    {type: SET_USERS_LIST, payload: {...values}});

 const delete_user  = (userId) => (
    {type: DELETE_USER, payload: {...userId}});

export const  getUsersListThunkCreator = (dispatch) => {
    return () => {
        console.log('getting users list')
        dispatch(toggleIsFetchingAC(true))
        DAL_GetUsersList()
            .then(
                res => {
                    console.log('getting users list success')
                    dispatch(toggleIsFetchingAC(false))
                    return dispatch(set_users_list(res))
                }
            )
            .catch(
                (res) => {
                    dispatch(toggleIsFetchingAC(false))
                    console.log('getting users list failure'+res.error)
                }
            )
    }

}

export const  deleteUserThunkCreator = (dispatch) => {
    return () => {
        console.log('deleting user')
        dispatch(toggleIsFetchingAC(true))

        DAL_GetUsersList()
            .then(
                res => {
                    console.log('getting users list success')
                    dispatch(toggleIsFetchingAC(false))
                    return dispatch(set_users_list(res))
                }
            )
            .catch(
                (res) => {
                    dispatch(toggleIsFetchingAC(false))
                    console.log('getting users list failure'+res.error)
                }

            )
    }

}

export default usersListReducer;