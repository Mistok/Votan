import React from 'react';

import CLIENTSingleApartment from "./CLIENTSingleApartment";
import "./CLIENTInfo.scss"

const CLIENTInfo = (props) => {
    return (
        <>
            {
                <>
                    { props.osbb ?
                        <>
                            <div  className="client_info_container">
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
                                <div className="client_info_apartment_container">
                                    {props.osbb.currentUserApartments
                                        ? props.osbb.currentUserApartments.map(
                                            apartment => (
                                                <CLIENTSingleApartment apartment={apartment} key={apartment.id}/>
                                            )
                                        )
                                        : ''
                                    }

                                </div>
                                <div >
                            <span>{props.osbb.hasUnvotedActivePolls
                                ? 'Маєте незавершені голосування'
                                : 'Активних голосуваннь немає'}
                            </span>
                                </div>
                            </div>
                        </>
                        : 'додайте приміщення '
                    }

                </>
            }

        </>
    );
}


export default CLIENTInfo;