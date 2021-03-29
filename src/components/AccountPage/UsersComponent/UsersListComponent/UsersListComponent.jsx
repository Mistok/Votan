import React, {useEffect} from 'react';
import {NavLink, useRouteMatch } from "react-router-dom";
import {DAL_DeleteUser} from "../../../../api/api";
import icon_close from  "./../../../../img/icon_close.png"

export  const UsersListComponent = (props) => {

    // useEffect(()=>{
    //     let savedDrafts = DAL_GetPollsDraft()
    // },[])
    const deleteUser = (userId) => {
        DAL_DeleteUser(userId)
    }
    let img1 = document.createElement("img");
    img1.src = './img/icon_options';
    let {path, url} = useRouteMatch()
    return (
        <>
            {
                props.usersList.map( user => (
                    <li className="users_list_element">
                        <NavLink
                            className="users_list_item row"
                            activeClassName="active_user"
                            to={`${path}/:${user.id}`} >
                            <span className="col-6">{user.email}</span>
                            <span className="col-2">{user.apartments[0].square}<span className="sing_user_descr">м<sub>2</sub></span></span>
                            <span className="col-2">{user.id}</span>
                            <span className="col-1">
                                <button className="sing_user_delete_btn users_list_delete_user" onClick={() => deleteUser(user.id)}><img src={icon_close} alt="options"/></button>
                            </span>


                        </NavLink>
                    </li>
                ))
            }
        </>
    );
}

