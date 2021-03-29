// Authentication reducer

import { DAL_Login} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_TOKEN = 'SET_TOKEN';
const SET_IS_AUTH = 'SET_IS_AUTH';
const LOGOUT = 'LOGOUT';
const SET_ROLE = 'SET_ROLE';
const SET_ROLE_OSBB = 'SET_ROLE_OSBB';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    token: null,
    email: null,
    login: null,
    role: null,
    isAuth: false,
    isFetching: false
};


const authReducer = ( state = initialState, action) => {

    switch (action.type) {

        case SET_TOKEN:
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

export const setIsAuth = (isAuth) => {
    return  {type: SET_IS_AUTH, payload: {isAuth}}
}
export const setRoleAC = (role) => {
    return  {type: SET_ROLE, payload: {role}}
}
export const setToken = (token) => {
    return  {type: SET_TOKEN, payload: {token}}
}
export const toggleIsFetchingAC = (isFetching) => {
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

export const settingRole = (role) => {
    return dispatch => {
        dispatch(setRoleAC(role))
    }
}

export const logIn = (values) => {
    debugger
    console.log(`login values`)
    console.log(values.values)
    console.log(`login values`)

    return dispatch => {
        dispatch(toggleIsFetchingAC(true))

        DAL_Login(values.values)
            .then(
                res => {
                    debugger
                    dispatch(toggleIsFetchingAC(false))
                    dispatch(setRoleAC(res.data.roles[0].role))
                    dispatch(setIsAuth(true))
                   return dispatch(setToken(res.data.token))
                }
            )
            .catch(
                (error) => {
                    dispatch(toggleIsFetchingAC(false))
                    console.log(error)
                    return dispatch(setIsAuth(false))
                }

            )
    }
};

export default authReducer;