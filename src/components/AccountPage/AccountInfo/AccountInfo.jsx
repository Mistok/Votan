import React from 'react';

import {connect} from "react-redux";

const AccountInfoContainer = (props) => {

    return (
        <>
            <div className="account_info_container">
                <h1>{props.osbb.name}</h1>
                <p>{props.osbbEmail}</p>
                <span>{props.osbb.address.city}</span>
                <span>{props.osbb.address.street}</span>
                <span>{props.osbb.address.house}</span>
                <span>{props.osbb.hasUnvotedActivePolls ? 'маєте незавершені голосування' : 'активних голосуваннь немаэ'}</span>
            </div>

        </>
    );
}

let mapStateToProps = (store) => {
    return {
        osbb: store.usersCabinet.osbbs[0],
        osbbEmail: store.usersCabinet.userEmail
    }
};
//
const  AccountInfo = connect(mapStateToProps, null)(AccountInfoContainer)

export default AccountInfo ;