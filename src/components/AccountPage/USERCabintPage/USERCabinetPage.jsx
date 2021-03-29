import React, { useState} from 'react';
import {connect} from "react-redux";
import { useRouteMatch} from "react-router-dom";
import ReactDOM from "react-dom";
import UserAddApartmentModal from "../Modal_windows/UserAddApartmentModal/UserAddApartrmentModal";

import CLIENTInfo from "./CLIENTSInfo";


const USERCabinetPage = (props) => {
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const toggleModal = (e) => {
        setIsModalOpen( !isModalOpen )
    }

    let {path, url} = useRouteMatch()
    return (
        <>
            {
                props.cabinet
                    ? <>
                        <div className="accounts_info_left col-12 col-md-8  align-content-center">
                            <a href="#" className=" p-0">{props.cabinet.userEmail || "default@test.com"} </a>
                            <a href="#" className=" p-0">Активних голосуваннь: {props.cabinet.unvotedPollsNumber || 0}</a>
                        </div>
                        <button
                            className="col-12 col-md-3 btn btn-primary account_add_facility mt-2 mt-lg-0"
                            onClick={toggleModal}
                        >
                            'Додати приміщення'
                        </button>
                        <CLIENTInfo osbb={props.cabinet.osbbs[0]}/>

                        {
                            isModalOpen && ReactDOM.createPortal(

                                 <UserAddApartmentModal toggleModal={toggleModal}/>
                            ,
                            document.getElementById('portal')
                            )
                        }
                    </>
                    :  ''

            }

        </>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        role: state.auth.role,
        cabinet: state.CLIENTsCabinet,
    }
}

export default connect(mapStateToProps, null)(USERCabinetPage);