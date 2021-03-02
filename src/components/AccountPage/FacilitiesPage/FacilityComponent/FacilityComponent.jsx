import React from 'react';

import "./FacilityComponent.scss"

const FacilityComponent = (facility = {
    id: "00000",
    name: "ОСББ NULL",
    address: "Boyarka, ЖК, ул. Lenina 1г,  00666",
    facilities: ["2"],
    voting: {
        active: [null],
        text: 'zlo'
    }
}) => {

    const localFacility = facility.facility;

    return (
        <>
            <div className="facility_card" data-id={localFacility.id}>
                <h1 className="facility_header">{localFacility.name}</h1>
                <p className="facility_address">
                    {localFacility.address}
                </p>
                <div className="facility_numbers">
                    {localFacility.facilities.map( n => <div>Кв. <span>{n}</span></div> )}

                </div>
                <div className="facility_warning">
                    {localFacility.voting.active[0] === null
                        ? "Активных голосований нет"
                        : localFacility.voting.text}
                </div>

            </div>

        </>

    );
}

export default FacilityComponent;