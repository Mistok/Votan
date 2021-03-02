// singleUserInfo reducer

import {toggleIsFetchingAC} from "./authReducer";
import { DAL_GetSingleUser} from "../api/api";

const SET_SINGLE_USER_INFO = 'SET_SINGLE_USER_INFO';


let initialState = {
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
            "square": 85,
            "user": {
                "apartments": [
                    {
                        "apartmentName": "Квартира 30",
                        "id": 123,
                        "ownerKey": "14572-OSRN",
                        "square": 50
                    },
                    {
                        "apartmentName": "Квартира 34",
                        "id": 124,
                        "ownerKey": "14572-OSRN",
                        "square": 35
                    }
                ],
                "confirmed": true,
                "email": "string",
                "id": 123,
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
}

const singleUserInfoReducer = ( state = initialState, action) => {

    switch (action.type) {

        case SET_SINGLE_USER_INFO:
            console.log(action.payload)
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};


// Actions
 const set_single_user_info  = (values) => (
    {type: SET_SINGLE_USER_INFO, payload: {...values}});



export const  getSingleUserInfoThunkCreator = (dispatch) => {
    return () => {
        console.log('getting users list')
        dispatch(toggleIsFetchingAC(true))

        DAL_GetSingleUser()
            .then(
                res => {
                    console.log('getting users list success')
                    dispatch(toggleIsFetchingAC(false))
                    return dispatch(set_single_user_info(res))
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

export default singleUserInfoReducer;

