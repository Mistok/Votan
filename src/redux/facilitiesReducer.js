// Facilities reducer

const SET_FACILITIES = 'SET_FACILITIES';
const ADD_FACILITY = 'ADD_FACILITY';
const DELETE_FACILITY = 'DELETE_FACILITY';
// {
//     "totalPollsNumber": 4,
//     "currentPage": 1,
//     "pageSize": 1,
//     "polls": [
    //     {
    //         "startDate": 12-02-2020,
    //         "osbbStatsDto": {
    //             "osbbDto": {
    //                 "name": "Osbb 1",
    //                 "totalSquare": 200.0,
    //                 "address": {
    //                     "postalCode": "1234",
    //                     "city": "Kyiv",
    //                     "street": null,
    //                     "house": "3"
    //                 }
    //             },
    //             "apartmentsNumber": 2,
    //             "currentUserApartments": [
    //                 {
    //                     "apartmentName": "2",
    //                     "square": 40.0,
    //                     "ownerKey": null
    //                 }
    //             ]
    //         },
    //         "questions": [
    //             {
    //                 "questionDto": {
    //                     "id": 6,
    //                     "description": "question3"
    //                 },
    //                 "answer": null
    //             },
    //             {
    //                 "questionDto": {
    //                     "id": 5,
    //                     "description": "question2"
    //                 },
    //                 "answer": "YES"
    //             }
    //         ],
    //         "active": true
    //     }
    // ]
// }
let initialState = [
    {
        id: "12345",
        name: "ОСББ Гранит",
        address: "Киев, ЖК \"Караваевы дачи\", ул. Полевая 73, Київ, 02000",
        facilities: ["112", "78"],
        voting: {
            active: [null],
            archive: [null]
        }
    },
    {
        id: "54321",
        name: "ОСББ Мрамор",
        address: "Киев, ЖК \"Новопечерская троещена\", ул. Драгомирова 16ф, Київ, 01111",
        facilities: ["31", "13"],
        voting: {
            active: [null],
            archive: [null]
        }
    },
    {
        id: "98765",
        name: "ОСББ Центр",
        address: "Киев, ЖК \"Элитна вежа\", ул. Выселковая 99г, Київ, 09191",
        facilities: ["666", "13", "69", "7"],
        voting: {
            active: [null],
            archive: [null]
        }
    },

];

const facilitiesReducer = ( state = initialState, action) => {

    switch (action.type) {

        case SET_FACILITIES:
            return {
                ...state,
                ...action.payload,
            };
        case ADD_FACILITY:
            return {
                ...state,
                ...action.payload,
            };
        case DELETE_FACILITY:
            let newState = [...state];
            return newState.filter(facility => facility.id !== action.payload);

        default:

            return state;
    }
};

// Actions
export const setFacilities  = (facility) => (
    {type: SET_FACILITIES, payload: facility});
export const deleteFacility  = (id) => (
    {type: SET_FACILITIES, payload: id});






export default facilitiesReducer;