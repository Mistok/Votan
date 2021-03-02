import React, {useEffect} from 'react';
import {connect, useSelector} from "react-redux";

import {DAL_DeleteUser, DAL_GetSingleUser} from "../../../../api/api";
import {getSingleUserInfoThunkCreator} from "../../../../redux/singleUserInfoReducer";

import './singleUserComponent.scss'
import {useParams} from "react-router-dom";
import icon_close from "../../../../img/icon_close.png";

const SingleUserComponent = (props) => {

    const userId = +useParams().undefined.toString().slice(1)
    // const getSingleUserInfo = (userId) => {
    //     // let singleUserInfo =  DAL_GetSingleUser()
    //     // console.log(singleUserInfo)
    //     getSingleUserInfoThunkCreator(userId)
    // }
    const deleteUser = () => {
        DAL_DeleteUser(userId)
    }
    console.log(userId)
    console.log(props)
    return (
        <>
            <li className="sing_user_container container">
                <div className="row sing_user_descr_row">
                   <div className="col-6">
                       <span className="sing_user_descr">email: </span> {props.singleUserInfo.email}
                   </div>
                    <div className="col-6">
                        <span className="sing_user_descr">id: </span>{userId}
                    </div>
                </div>
                <div className="row sing_user_descr_row">
                    <div className="col-6">
                        <span className="sing_user_descr">приміщення: </span>{props.singleUserInfo.apartments[0].user.apartments.length}
                    </div>
                    <div className="col-6">
                        <span className="sing_user_descr">загальна площа:</span> <span>{props.singleUserInfo.apartments[0].square} <span className="sing_user_descr">м<sub>2</sub></span></span>
                    </div>
                </div>

                {/*<button className="btn btn-secondary mr-2" >Get single user info</button>*/}
                <button className="sing_user_delete_btn" onClick={deleteUser}><img src={icon_close} alt=""/></button>
                <div className="row sing_user_descr_row">
                    {props.singleUserInfo.apartments[0].user.apartments.map( apartment => (
                        <div className="sing_user_apartment_container">
                            <p>{apartment.apartmentName}  ({apartment.square} <span className="sing_user_descr">м<sub>2</sub></span>)</p>
                        </div>
                        )
                    )}
                </div>
            </li>

        </>
    );
}

const mapStateToProps = (state) => {
    return {
        singleUserInfo: state.singleUser
    }
}
export default connect(mapStateToProps, null)(SingleUserComponent);