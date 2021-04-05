import React from 'react';

import {connect} from "react-redux";
import "./AccountInfo.scss"

const AccountInfoContainer = (props) => {
    return (
            <>
                {
                    props.osbb !== undefined && props.apartments !== undefined
                        ?  <div className="account_info_container">

                                <h1>ОСББ "{ props.osbb.name }"</h1>
                                <div>
                                    <span>{  props.osbb.address.city }</span>
                                    <span>, </span>
                                    <span>{ props.osbb.address.street  }</span>
                                    <span> </span>
                                    <span>{ props.osbb.address.house  }</span>
                                    <span>, </span>
                                    <span>{ props.osbb.address.postalCode  }</span>
                                    <span> </span>
                                </div>
                                <div className="account_info_area row ">

                                    <div className="col-12 col-lg-6 flex-column">
                                        <span>Загальна зареєстрована площа: </span>
                                        <span> { props.osbb.totalSquare }</span>
                                    </div>

                                    <div className="col-12 col-lg-6 flex-column">
                                        <span>Зареєстровано приміщеннь: </span>
                                        <span> { props.apartments.length  }</span>
                                    </div>
                                </div>

                                <div className="row mt-2  mt-lg-5">
                                    <div className="col-12 col-lg-6 flex-column align-items-center"><span>{props.osbb.hasUnvotedActivePolls ? 'Маєте незавершені голосування' : 'Активних голосуваннь немає'}</span></div>
                                    <div className="col-12 col-lg-6 flex-column align-content-lg-center"><button className="btn btn-primary " onClick={props.toggleModal}>Додати приміщення</button></div>
                                </div>

                            </div>
                        : 'no info'
                }

        </>
    );
}

let mapStateToProps = (store) => {
    return {
        osbb: store.OSBBsCabinet.osbbDto,
        osbbEmail: store.OSBBsCabinet.userEmail,
        apartments: store.OSBBsCabinet.apartments
    }
};

const  AccountInfo = connect(mapStateToProps, null)(AccountInfoContainer)

export default AccountInfo ;