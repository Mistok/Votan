import React from 'react';

import "./CLIENTSingleApartment.scss"

const CLIENTSingleApartment = (props) => {
    console.log(`22`)
    console.log(props.apartment)
    console.log(`22`)
    return (
        <>
            {

                 <>

                    <div data-apartment_id={props.apartment.id} className="client_single_apartment_container">
                        <span>{props.apartment.apartmentName}</span>: {props.apartment.square}м<sup>2</sup>
                    </div>

                 </>
            }

        </>
    );
}

export default CLIENTSingleApartment