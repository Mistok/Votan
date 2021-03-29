
// usersCabinetReducer reducer

import {
    DAL_AttachApartmentToUser,
    DAL_CreateNewApartment,
    DAL_DeleteApartment,
    DAL_GenerateApartmentKey,
    DAL_GetOSBBSCabinet
} from "../api/api";

import {toggleIsFetchingAC} from "./authReducer";

const OSBB_SET_CABINET_DATA = 'SET_OSBB_CABINET_DATA';
const OSBB_SET_APARTMENT = 'OSBB_SET_APARTMENT';
const OSBB_ADD_APARTMENT = 'OSBB_ADD_APARTMENT';
const OSBB_DELETE_APARTMENT = 'OSBB_DELETE_APARTMENT';
const OSBB_SET_NEW_APARTMENT_KEY = 'OSBB_SET_NEW_APARTMENT_KEY';

let initialState = {
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
    "apartments": [
        {
            "apartmentName": "flat1",
            "id": 123,
            "ownerKey": "14572-OSRN",
            "square": 100
        }
    ]
}

const deepStateCopy = (state) => { return JSON.parse(JSON.stringify(state)) }

const OSBBCabinetReducer = ( state = initialState, action) => {

    switch (action.type) {

        case OSBB_SET_CABINET_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case OSBB_SET_APARTMENT:

            let newState1 = deepStateCopy(state)
            return  newState1.apartments.push(action.payload)
        case OSBB_ADD_APARTMENT:
            let newState2 = deepStateCopy(state)
            newState2.apartments.push(action.payload)
            return  newState2
        case OSBB_SET_NEW_APARTMENT_KEY:

            let newState3 = deepStateCopy(state)
            for( let i=0 ; i < newState3.apartments.length ; i++) {
                if( newState3.apartments[i].id === +action.apartmentId ){
                    newState3.apartments[i].ownerKey = action.apartmentKey
                    break
                }
            }
            console.log(newState3)
            return newState3;
        case OSBB_DELETE_APARTMENT:
            let newState5 = deepStateCopy(state);
            let apartments = newState5.apartments.filter(apartments => +apartments.id !== +action.payload);
            newState5.apartments = apartments;
            return newState5

        default:

            return state;
    }

};

        // Actions creator

export const set_OSBB_cabinet_data  = (values) => (
    {type: OSBB_SET_CABINET_DATA, payload: {...values}});
export const OSBBS_setApartments  = (apartments) => (
    {type: OSBB_ADD_APARTMENT, payload: apartments});
const OSBBS_deleteApartment  = (id) => (
    {type: OSBB_DELETE_APARTMENT, payload: id});
const OSBBS_set_apartment_key  = (apartmentId, apartmentKey) => (
    {type: OSBB_SET_NEW_APARTMENT_KEY, apartmentId: apartmentId, apartmentKey: apartmentKey});

        // Thunks

export const  getOSBBCabinetThunkCreator = () => {

    console.log('gettingOSBBCabinet')
    return dispatch => {
        dispatch(toggleIsFetchingAC(true))

        DAL_GetOSBBSCabinet()
            .then(
                res => {
                    dispatch(toggleIsFetchingAC(false))
                    dispatch(set_OSBB_cabinet_data(res))
                }
            )
            .catch(
                (error) => {
                    dispatch(toggleIsFetchingAC(false))
                    alert(error.message)
                }

            )
    }

}


export const OSBBGenerateApartmentKeyTC = (apartmentId) => {

    return (dispatch) => {

        DAL_GenerateApartmentKey(apartmentId)
            .then(
                res => {
                    alert(res.data)
                    debugger
                    dispatch(OSBBS_set_apartment_key(apartmentId, res.data))
                }
            )
            .catch(
                (error) => {
                    dispatch(toggleIsFetchingAC(false))
                }

            )
    }

}

export const OSBBSDeleteApartmentTC = (apartmentId) => {

    return (dispatch) => {

        DAL_DeleteApartment(apartmentId)
            .then(
                res => {
                    dispatch(toggleIsFetchingAC(false))
                    alert(`Приміщення ${apartmentId} видалено`)
                    dispatch(OSBBS_deleteApartment(apartmentId))
                }
            )
            .catch(
                (error) => {

                    alert(`Помилка ${error.message}`)
                    console.log(error)
                    dispatch(toggleIsFetchingAC(false))
                }

            )
    }

}
export const OSBBSCreateApartmentTC = (newApartmentOptions) => {

    return (dispatch) => {

        DAL_CreateNewApartment(newApartmentOptions)
            .then(
                (res) => {
                    alert(`Приміщення ${res.data.apartmentName} зареэстровано`)
                    dispatch(OSBBS_setApartments(res.data))
                }
            )

            .catch(
                (error) => {
                    alert(`Помилка ${error.message}`)
                    console.log(error)
                }

            )
    }

}



export default OSBBCabinetReducer;