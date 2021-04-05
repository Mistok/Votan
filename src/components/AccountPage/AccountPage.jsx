import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import { NavLink, Route, Redirect } from "react-router-dom";
import VotingPage from "./VotingPage/VotingPage";
import SettingsPage from "./SettingsPage/SettingsPage";
import "./AccountPage.scss"

import {connect} from "react-redux";

import Preloader from "../preloader/preloader";
import UsersComponent from "./UsersComponent/usersComponent";

import USERCabinetPage from "./USERCabintPage/USERCabinetPage";
import OSBBCabinetPage from "./OSBBCabinetPage/OSBBCabinetPage";
import {getOSBBCabinetThunkCreator} from "../../redux/OSBBCabinetReducer";
import {getCLIENTCabinet} from "../../redux/CLIENTCabinetReducer";

const AccountPage = (props) => {
    let role = sessionStorage.role;

    useEffect( () => {
        role === 'OSBB' ? props.getOSBBCabinet() : props.getCLIENTCabinet()
    }, [props.apartments])

    // console.log(`Role in cabinet ${role}`)

    return (
        <>
            <section className="account_section row ml-0 mr-0 p-0">

                <div className="accounts_page_left col-12  col-sm-3 col-lg-2 justify-content-between ">

                    <nav className="navbar navbar-expand-sm navbar-light  navbar-container flex-row flex-sm-column">
                        <NavLink className="votan_logo" to="/main/login">Votan</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbar"
                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar">

                            <ul className="navbar-nav flex-column">
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to={"/account"}
                                        href="#">
                                        <div className="row flex-nowrap">
                                            <svg className="account_menu_icon" width="22" height="24"
                                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.1348 20.7733V17.7156C10.1348 16.9351 10.7722 16.3023 11.5584 16.3023H14.4326C14.8102 16.3023 15.1723 16.4512 15.4393 16.7163C15.7063 16.9813 15.8563 17.3408 15.8563 17.7156V20.7733C15.8539 21.0978 15.9821 21.4099 16.2124 21.6402C16.4427 21.8705 16.7561 22 17.0829 22H19.0438C19.9596 22.0023 20.8388 21.6428 21.4872 21.0008C22.1356 20.3588 22.5 19.487 22.5 18.5778V9.86686C22.5 9.13246 22.1721 8.43584 21.6046 7.96467L14.934 2.67587C13.7737 1.74856 12.1111 1.7785 10.9854 2.74698L4.46701 7.96467C3.87274 8.42195 3.51755 9.12064 3.5 9.86686V18.5689C3.5 20.4639 5.04738 22 6.95617 22H8.87229C9.55123 22 10.103 21.4562 10.1079 20.7822L10.1348 20.7733Z"/>
                                            </svg>
                                            Мій кабінет
                                        </div>
                                    </NavLink>
                                </li>

                                <li className="nav-item"
                                    data-toggle="collapse"
                                    data-target="#navbar2"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <NavLink className="nav-link" to={"/account/voting/active"} href="#">
                                        <div className="row flex-nowrap">
                                            <svg className="account_menu_icon" width="20" height="20"
                                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M5.33037 0.000366211H14.6694C18.0704 0.000366211 19.9904 1.92937 20.0004 5.33037V14.6704C20.0004 18.0704 18.0704 20.0004 14.6694 20.0004H5.33037C1.92937 20.0004 0.000366211 18.0704 0.000366211 14.6704V5.33037C0.000366211 1.92937 1.92937 0.000366211 5.33037 0.000366211ZM10.0494 15.8604C10.4804 15.8604 10.8394 15.5404 10.8794 15.1104V4.92037C10.9194 4.61037 10.7704 4.29937 10.5004 4.13037C10.2194 3.96037 9.87937 3.96037 9.61037 4.13037C9.33937 4.29937 9.19037 4.61037 9.21937 4.92037V15.1104C9.27037 15.5404 9.62937 15.8604 10.0494 15.8604ZM14.6504 15.8604C15.0704 15.8604 15.4294 15.5404 15.4804 15.1104V11.8304C15.5094 11.5094 15.3604 11.2104 15.0894 11.0404C14.8204 10.8704 14.4804 10.8704 14.2004 11.0404C13.9294 11.2104 13.7804 11.5094 13.8204 11.8304V15.1104C13.8604 15.5404 14.2194 15.8604 14.6504 15.8604ZM6.21937 15.1104C6.17937 15.5404 5.82037 15.8604 5.38937 15.8604C4.95937 15.8604 4.59937 15.5404 4.56037 15.1104V8.20037C4.53037 7.88937 4.67937 7.58037 4.95037 7.41037C5.21937 7.24037 5.56037 7.24037 5.83037 7.41037C6.09937 7.58037 6.25037 7.88937 6.21937 8.20037V15.1104Z"/>
                                            </svg>
                                            Голосування
                                        </div>
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <ul className="account_sub_menu collapse navbar-collapse flex-column"
                                        id="navbar2">
                                        <li className="nav-item accounts_sub_link_container">
                                            <NavLink className="nav-link accounts_sub_link"
                                                     to={"/account/voting/active"} href="#">Активні</NavLink>
                                        </li>
                                        <li className="nav-item accounts_sub_link_container">
                                            <NavLink className="nav-link accounts_sub_link"
                                                     to={"/account/voting/archive"} href="#">Архів</NavLink>
                                        </li>
                                        {role === 'OSBB'
                                            ? <>
                                                <li className="nav-item accounts_sub_link_container">
                                                    <NavLink className="nav-link accounts_sub_link"
                                                             to={"/account/voting/new"} href="#">Нове
                                                        голосування</NavLink>
                                                </li>
                                                <li className="nav-item accounts_sub_link_container">
                                                    <NavLink className="nav-link accounts_sub_link"
                                                             to={"/account/voting/draft"}
                                                             href="#">Чернетка</NavLink>
                                                </li>
                                            </>
                                            : ''
                                        }
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/account/users"} href="#">
                                        <div className="row flex-nowrap">
                                            <svg className="account_menu_icon" width="24" height="24"
                                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M20.4022 13.5801C20.7599 13.7701 21.0358 14.0701 21.23 14.3701C21.6081 14.9901 21.5775 15.7501 21.2096 16.4201L20.4942 17.6201C20.1161 18.2601 19.4109 18.6601 18.6853 18.6601C18.3277 18.6601 17.9291 18.5601 17.6021 18.3601C17.3364 18.1901 17.0298 18.1301 16.7027 18.1301C15.691 18.1301 14.8428 18.9601 14.8121 19.9501C14.8121 21.1001 13.8719 22.0001 12.6967 22.0001H11.3068C10.1213 22.0001 9.18113 21.1001 9.18113 19.9501C9.16069 18.9601 8.31247 18.1301 7.30073 18.1301C6.96348 18.1301 6.6569 18.1901 6.40141 18.3601C6.07438 18.5601 5.6656 18.6601 5.31813 18.6601C4.58232 18.6601 3.87717 18.2601 3.49905 17.6201L2.7939 16.4201C2.41577 15.7701 2.39533 14.9901 2.77346 14.3701C2.93697 14.0701 3.24356 13.7701 3.59102 13.5801C3.87717 13.4401 4.06112 13.2101 4.23486 12.9401C4.74584 12.0801 4.43925 10.9501 3.57059 10.4401C2.55885 9.87012 2.23182 8.60012 2.81434 7.61012L3.49905 6.43012C4.09178 5.44012 5.35901 5.09012 6.38097 5.67012C7.27007 6.15012 8.42488 5.83012 8.94608 4.98012C9.10959 4.70012 9.20157 4.40012 9.18113 4.10012C9.16069 3.71012 9.27311 3.34012 9.46728 3.04012C9.8454 2.42012 10.5301 2.02012 11.2761 2.00012H12.7171C13.4734 2.00012 14.1581 2.42012 14.5362 3.04012C14.7201 3.34012 14.8428 3.71012 14.8121 4.10012C14.7917 4.40012 14.8837 4.70012 15.0472 4.98012C15.5684 5.83012 16.7232 6.15012 17.6225 5.67012C18.6342 5.09012 19.9117 5.44012 20.4942 6.43012L21.1789 7.61012C21.7716 8.60012 21.4446 9.87012 20.4227 10.4401C19.554 10.9501 19.2474 12.0801 19.7686 12.9401C19.9321 13.2101 20.1161 13.4401 20.4022 13.5801ZM9.10959 12.0101C9.10959 13.5801 10.4075 14.8301 12.012 14.8301C13.6164 14.8301 14.8837 13.5801 14.8837 12.0101C14.8837 10.4401 13.6164 9.18012 12.012 9.18012C10.4075 9.18012 9.10959 10.4401 9.10959 12.0101Z"/>
                                            </svg>
                                           Користувачі
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/account/settings"} href="#">
                                        <div className="row flex-nowrap">
                                            <svg className="account_menu_icon" width="24" height="24"
                                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M20.4022 13.5801C20.7599 13.7701 21.0358 14.0701 21.23 14.3701C21.6081 14.9901 21.5775 15.7501 21.2096 16.4201L20.4942 17.6201C20.1161 18.2601 19.4109 18.6601 18.6853 18.6601C18.3277 18.6601 17.9291 18.5601 17.6021 18.3601C17.3364 18.1901 17.0298 18.1301 16.7027 18.1301C15.691 18.1301 14.8428 18.9601 14.8121 19.9501C14.8121 21.1001 13.8719 22.0001 12.6967 22.0001H11.3068C10.1213 22.0001 9.18113 21.1001 9.18113 19.9501C9.16069 18.9601 8.31247 18.1301 7.30073 18.1301C6.96348 18.1301 6.6569 18.1901 6.40141 18.3601C6.07438 18.5601 5.6656 18.6601 5.31813 18.6601C4.58232 18.6601 3.87717 18.2601 3.49905 17.6201L2.7939 16.4201C2.41577 15.7701 2.39533 14.9901 2.77346 14.3701C2.93697 14.0701 3.24356 13.7701 3.59102 13.5801C3.87717 13.4401 4.06112 13.2101 4.23486 12.9401C4.74584 12.0801 4.43925 10.9501 3.57059 10.4401C2.55885 9.87012 2.23182 8.60012 2.81434 7.61012L3.49905 6.43012C4.09178 5.44012 5.35901 5.09012 6.38097 5.67012C7.27007 6.15012 8.42488 5.83012 8.94608 4.98012C9.10959 4.70012 9.20157 4.40012 9.18113 4.10012C9.16069 3.71012 9.27311 3.34012 9.46728 3.04012C9.8454 2.42012 10.5301 2.02012 11.2761 2.00012H12.7171C13.4734 2.00012 14.1581 2.42012 14.5362 3.04012C14.7201 3.34012 14.8428 3.71012 14.8121 4.10012C14.7917 4.40012 14.8837 4.70012 15.0472 4.98012C15.5684 5.83012 16.7232 6.15012 17.6225 5.67012C18.6342 5.09012 19.9117 5.44012 20.4942 6.43012L21.1789 7.61012C21.7716 8.60012 21.4446 9.87012 20.4227 10.4401C19.554 10.9501 19.2474 12.0801 19.7686 12.9401C19.9321 13.2101 20.1161 13.4401 20.4022 13.5801ZM9.10959 12.0101C9.10959 13.5801 10.4075 14.8301 12.012 14.8301C13.6164 14.8301 14.8837 13.5801 14.8837 12.0101C14.8837 10.4401 13.6164 9.18012 12.012 9.18012C10.4075 9.18012 9.10959 10.4401 9.10959 12.0101Z"/>
                                            </svg>
                                            Налаштування
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>

                <div className="accounts_page_right col-12 col-sm-9 col-md-8 p-0">
                    {
                        props.isFetching
                            ? <Preloader/>
                            : <div className="container align-content-center">

                                    <div className="account_info row justify-content-between">
                                        {
                                            {
                                                'CLIENT':
                                                    <Route
                                                            path="/account"
                                                            component={USERCabinetPage}
                                                            exact
                                                    />,
                                                'OSBB': <Route
                                                    path="/account"
                                                    component={OSBBCabinetPage}
                                                    exact
                                                />
                                            }[role]
                                        }

                                    </div>

                                <Route
                                    path="/account/voting"
                                    component={VotingPage}
                                />
                                <Route
                                    path="/account/users"
                                    component={UsersComponent}
                                />
                                <Route exact
                                       path="/account/settings"
                                       component={SettingsPage}
                                />

                            </div>
                    }
                </div>

            </section>
        </>
    );
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        role: state.auth.role,
        isFetching: state.auth.isFetching,
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        getOSBBCabinet: () => {dispatch(getOSBBCabinetThunkCreator(dispatch))},
        getCLIENTCabinet: () => {dispatch(getCLIENTCabinet(dispatch))}

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
