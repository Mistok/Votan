// Authentication reducer

const SET_USER_DATA = 'SET_USER_DATA';
const LOGOUT = 'LOGOUT';
const SET_ROLE = 'SET_ROLE';
const SET_ROLE_OSBB = 'SET_ROLE_OSBB';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    userId: null,
    email: null,
    login: null,
    role: 'osbb',
    isAuth: true,
    isFetching: false
};


const authReducer = ( state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                ...action.payload,
            };
        case SET_ROLE:

            return {
                ...state,
                ...action.payload,
            };

        case SET_ROLE_OSBB:
            return {
                ...state,
                role: 'osbb'
            }
        case TOGGLE_IS_FETCHING: {
            // debugger
            return {
                ...state,
                isFetching: action.payload
            }
        }
        default:
            return state;
    }
};


// Actions
export const setAuthUsersData  = (userId, email, login, isAuth) => (
    {type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const setRoleAC = (role)  => {
       return  {type: SET_ROLE, payload: {role}}
}
export const toggleIsFetchingAC = (isFetching)  => {
    return  {type: TOGGLE_IS_FETCHING, payload: isFetching}
}


export const logout = (email, password, rememberMe) => (dispatch) => {
    // authAPI.logout()
    //     .then((response) => {
    //
    //             if(response.data.resultCode === 0){
    //                 dispatch(setAuthUsersData( null, null, null, false ));
    //             }
    //         }
    //     );
};

export const getAuthUserData = () => (dispatch) => {

};

export const login = (email, password, rememberMe) => (dispatch) => {

};





export default authReducer;