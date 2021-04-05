
// usersCabinetReducer reducer

//
//
// const SET_USER_CABINET_DATA = 'SET_USER_CABINET_DATA';
//
//
// let initialState = {
//     userEmail: "undefined@test.com",
//     osbbs: [
//         {
//             name: "none",
//             address: {
//                 house: "0",
//                 postalCode: "00000",
//                 city: "Default",
//                 street: "Default"
//             },
//             currentUserApartments: [
//                 {
//                     "apartmentName": "default",
//                     "id": 0,
//                     "ownerKey": "14572-OSRN",
//                     "square": 100
//                 }
//             ],
//             hasUnvotedActivePolls: false
//         }
//     ],
//     unvotedPollsNumber: 0
// }
//
//
// const usersCabinetReducer = ( state = initialState, action) => {
//
//     switch (action.type) {
//
//         case SET_USER_CABINET_DATA:
//             // console.log(action.payload)
//             return {
//                 ...state,
//                 ...action.payload,
//             };
//
//         default:
//             return state;
//     }
// };
//
//
// // Actions
// export const set_user_cabinet_data  = (values) => (
//     {type: SET_USER_CABINET_DATA, payload: {...values}});
//
// // export const  getUserCabinetThunkCreator = (dispatch) => {
// //     debugger
// //     return () => {
// //         console.log('getting cabinet')
// //         dispatch(toggleIsFetchingAC(true))
// //
// //         DAL_GetUsersCabinet()
// //             .then(
// //                 res => {
// //                     dispatch(toggleIsFetchingAC(false))
// //                     return dispatch(set_user_cabinet_data(res))
// //                 }
// //             )
// //             .catch(
// //                 (error) => {
// //                     dispatch(toggleIsFetchingAC(false))
// //                 }
// //
// //             )
// //     }
// //
// // }
//
//
//
// export default usersCabinetReducer;