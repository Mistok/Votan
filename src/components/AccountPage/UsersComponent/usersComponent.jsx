import React, {useEffect} from 'react';
import {connect} from "react-redux";
import { DAL_GetUsersList} from "../../../api/api";
import { Route, useRouteMatch, Switch} from "react-router-dom";
import {getUsersListThunkCreator} from "../../../redux/usersListReducer";

import {UsersListComponent} from "./UsersListComponent/UsersListComponent";
import SingleUserComponent from "./SingleUserComponent/singleUserComponent";
import "./usersComponent.scss"
const UsersComponent = (props) => {

    const usersList = () => {
        let usersList = getUsersListThunkCreator()

    }
    let {path, url} = useRouteMatch()
    return (
        <>
            <h2>Users component</h2>
            <button className="btn">Get users list</button>
            <hr/>
            <ul className="users_comp_list">
                 <Switch>
                     <Route exact path={`${path}`}><UsersListComponent usersList={props.usersList}/></Route>
                     <Route exact path={`${path}/:${props.usersList.id}`}><SingleUserComponent /></Route>
                 </Switch>
            </ul>
            {/*<Route path={`${path}/:user_${props.usersList.id}`}  component={SingleUserPage}/>*/}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        role: state.auth.role,
        cabinet: state.cabinet,
        usersList: state.usersList
    }
}
export default connect(mapStateToProps, null)(UsersComponent);