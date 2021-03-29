
// usersCabinetReducer reducer

import {
    DAL_DeleteApartment,
    DAL_GetCLIENTCabinet,
} from "../api/api";
import {toggleIsFetchingAC} from "./authReducer";

const SET_CLIENT_CABINET_DATA = 'SET_USER_CABINET_DATA';
const SET_APARTMENT = 'SET_APARTMENT';
const ADD_APARTMENT = 'ADD_APARTMENT';
const DELETE_APARTMENT = 'DELETE_APARTMENT';
const SET_NEW_APARTMENT_KEY = 'SET_NEW_APARTMENT_KEY';

let initialState = {
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
}


const CLIENTCabinetReducer = ( state = initialState, action) => {

    switch (action.type) {

        case SET_CLIENT_CABINET_DATA:

            return {
                ...state,
                ...action.payload,
            };
        case SET_APARTMENT:
             let newState1 = {...state}
            return  newState1.apartments.push(action.payload)
        case ADD_APARTMENT:
            return {
                ...state,
                ...action.payload,
            };
        case SET_NEW_APARTMENT_KEY:
            debugger
            let newState2 = [...state]
            for( let apartment of newState2 ) {
                if( apartment.id === action.apartmentId ){
                    apartment.apartmentKey = action.apartmentKey
                    break
                }
            }
            return {
                ...newState2
            };
        // case DELETE_APARTMENT:
        //     debugger
        //     let newState5 = [...state];
        //     return newState5.apartments.filter(apartments => apartments.id !== action.payload);

        default:

            return state;
    }

};


// Action creators
export const set_CLIENT_cabinet_data  = (values) => (
    {type: SET_CLIENT_CABINET_DATA, payload: {...values}});

export const CLIENT_setApartmentAC = (apartments) => (
    {type: SET_APARTMENT, payload: apartments});
export const CLIENT_deleteApartment  = (id) => (
    {type: DELETE_APARTMENT, payload: id});
export const CLIENT_set_apartment_key  = (apartmentId, apartmentKey) => (
    {type: SET_NEW_APARTMENT_KEY, apartmentId: apartmentId, apartmentKey: apartmentKey});

        // Thunks

export const  getCLIENTCabinet = () => {

    console.log('gettingClientCabinet')
    return dispatch => {
        dispatch(toggleIsFetchingAC(true))

        DAL_GetCLIENTCabinet()
            .then(
                res => {

                    dispatch(toggleIsFetchingAC(false))
                    return dispatch(set_CLIENT_cabinet_data(res))
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

// export const CLIENT_deleteApartmentTC = (apartmentId) => {
//
//     return (dispatch) => {
//
//
//         DAL_DeleteApartment(apartmentId)
//             .then(
//                 res => {
//                     // dispatch(toggleIsFetchingAC(false))
//                     alert(`Приміщення ${apartmentId} видалено`)
//                     return dispatch(CLIENT_deleteApartment(res))
//                 }
//             )
//             .catch(
//                 (error) => {
//                     dispatch(toggleIsFetchingAC(false))
//                 }
//
//             )
//     }
//
// }

export default CLIENTCabinetReducer;