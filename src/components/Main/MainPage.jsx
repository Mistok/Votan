import React from 'react';
import  {LoginReduxForm, RegisterReduxForm} from "../AuthPage/AuthPage";
import "./MainPage.scss";
import {Route} from "react-router-dom";


const MainPage = (props) => {

    return (
        <>
            <div className="row ml-0 mr-0">

                <div className="col-12 col-sm-4 col-lg-3 auth_page_container vh-100 vh-sm-50 ">

                    <div className="vh-100 row">
                        <div className="container">
                            <h1 className="votan_logo">Votan</h1>
                            <Route exact
                                   path="/main/login"
                                   component={LoginReduxForm}
                            />
                            <Route exact
                                   path="/main/registration"
                                   component={RegisterReduxForm}
                            />
                        </div>


                    </div>
                </div>
                <div className="col-0 col-sm-8 col-lg-9  p-0">
                    <div className="main_page_pic vh-100"/>
                </div>
            </div>

        </>
    );
}

export default MainPage;