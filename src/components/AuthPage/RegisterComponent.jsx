import React from 'react';
import {NavLink, useRouteMatch} from "react-router-dom";



export const RegisterComponent = () => {
    let {path, url} = useRouteMatch()
    return(
        <>
            <h3 className="auth_form_header">Зареєструвати: </h3>
            <NavLink
                className="auth_nav_link auth_submit btn btn-primary"
                activeClassName={'registration_nav_link_active'}
                to={`${url}/osbb`}>
                ОСББ
            </NavLink>
            <NavLink
                className="auth_nav_link auth_submit btn btn-primary"
                activeClassName={'registration_nav_link_active'}
                to={`${url}/client`}>
                Користувач
            </NavLink>

            <hr className="auth_hr"/>
             <NavLink
                   className="auth_submit btn btn-primary"
                   activeClassName={'registration_nav_link_active'}
                   to={`../../main/login`}>
                 Увійти в акаунт
             </NavLink>

        </>
    )
}