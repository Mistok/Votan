// Facilities reducer

import {DAL_GenerateApartmentKey} from "../api/api";

const SET_APARTMENT = 'SET_APARTMENT';
const ADD_APARTMENT = 'ADD_APARTMENT';
const DELETE_APARTMENT = 'DELETE_APARTMENT';
const SET_NEW_APARTMENT_KEY = 'SET_NEW_APARTMENT_KEY';

let initialState = [
    {
        "apartmentName": "Квартира №1",
        "id": 111,
        "ownerKey": "відсутній",
        "square": 100
    },
    {
        "apartmentName": "Квартира №2",
        "id": 112,
        "ownerKey": "відсутній",
        "square": 100
    },
    {
        "apartmentName": "Квартира №3",
        "id": 113,
        "ownerKey": "відсутній",
        "square": 100
    },
    {
        "apartmentName": "Квартира №4",
        "id": 114,
        "ownerKey": "відсутній",
        "square": 100
    },
    {
        "apartmentName": "Квартира №5",
        "id": 115,
        "ownerKey": "відсутній",
        "square": 100
    },
    {
        "apartmentName": "Квартира №6",
        "id": 116,
        "ownerKey": "відсутній",
        "square": 33
    },
    {
        "apartmentName": "Квартира №7",
        "id": 117,
        "ownerKey": "відсутній",
        "square": 66
    },
    {
        "apartmentName": "Квартира №8",
        "id": 118,
        "ownerKey": "відсутній",
        "square": 80
    },
    {
        "apartmentName": "Квартира №9",
        "id": 119,
        "ownerKey": "відсутній",
        "square": 112
    }

];

const apartmentsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_APARTMENT:
            return {
                ...state,
                ...action.payload,
            };
        case ADD_APARTMENT:
            return {
                ...state,
                ...action.payload,
            };
        case SET_NEW_APARTMENT_KEY:
            let newState1 = [...state]
            for( let apartment of newState1 ) {
                if( apartment.id === action.apartmentId ){
                    apartment.apartmentKey = action.apartmentKey
                    break
                }
            }
            return {
                ...newState1
            };
        case DELETE_APARTMENT:
            let newState = [...state];
            return newState.filter(apartments => apartments.id !== action.payload);

        default:

            return state;
    }
};

// Actions
const setApartments  = (apartments) => (
    {type: SET_APARTMENT, payload: apartments});
const deleteApartment  = (id) => (
    {type: DELETE_APARTMENT, payload: id});
const set_apartment_key  = (apartmentId, apartmentKey) => (
    {type: SET_NEW_APARTMENT_KEY, apartmentId: apartmentId, apartmentKey: apartmentKey});

// Thunks





export default apartmentsReducer;