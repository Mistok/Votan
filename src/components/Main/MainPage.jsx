import React from 'react';
import LogInContainer from "../AuthPage/AuthPage";
import "./MainPage.scss";
import {NavLink, Route, Switch} from "react-router-dom";
import {RegisterComponent} from "../AuthPage/RegisterComponent";
import {RegisterClient} from "../AuthPage/RegisterClient";
import {RegisterOSBB} from "../AuthPage/RegisterOSBB";
import {OSBBRegisterForm} from "../AccountPage/OSBBRegisterForm/osbbRegisterForm";
import {useRouteMatch} from "react-router-dom";



const   MainPage = (props) => {
    let { path, url } = useRouteMatch();
    return (
        <>
            <div className="row ml-0 mr-0">

                <div className="col-12 col-sm-4 col-lg-3 auth_page_container vh-100 vh-sm-50 ">

                    <div className="vh-100 row">
                        <div className="container">
                            <NavLink className="votan_logo" to={`${path}/login`}>Votan</NavLink>
                            <Switch>
                                <Route exact
                                       path={ `${url}/login` }
                                       component = {LogInContainer}
                                />
                                <Route exact
                                       path={ `${url}/registration` }
                                       component={RegisterComponent}
                                />
                                <Route exact
                                       path={ `${url}/registration/client` }
                                       component={RegisterClient}
                                />
                                <Route exact
                                       path= { `${url}/registration/osbb` }
                                       component={RegisterOSBB}
                                />

                            </Switch>

                        </div>


                    </div>

                </div>
                <div className="col-0 col-sm-8 col-lg-9  p-0">
                    <div className="main_page_pic vh-100">
                        <Route exact
                               path={ `${url}/registration/osbb` }
                               component={OSBBRegisterForm}
                        />

                    </div>

                </div>

            </div>

        </>
    );
}

export default MainPage;