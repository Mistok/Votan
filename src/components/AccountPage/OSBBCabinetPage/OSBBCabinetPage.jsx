import React, {useState} from 'react';
import {connect} from "react-redux";
import AccountInfo from "../AccountInfo/AccountInfo";
import ApartmentsTable from "../ApartmentsTable/ApartmentsTable";
import ReactDOM from "react-dom";
import OSBBAddApartmentModal from "../Modal_windows/OSBBAddApartmentModal/OSBBAddApatrmentModal";

import "./OSBBCabinetPage.scss";
import {getOSBBCabinetThunkCreator} from "../../../redux/OSBBCabinetReducer";

const OSBBCabinetPage = (props) => {
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const toggleModal = (e) => {
        setIsModalOpen( !isModalOpen );
    }
    return (
        <>
             <div className="cabinet_container">
                  <AccountInfo toggleModal={toggleModal} />
                  <ApartmentsTable apartments={props.apartments} />
             </div>
            {
                isModalOpen && ReactDOM.createPortal(
                    <OSBBAddApartmentModal toggleModal={toggleModal}/>,
                    document.getElementById('portal')
                )
            }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        role: state.auth.role,
        cabinet: state.cabinet
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getOSBBCabinet: () => dispatch(getOSBBCabinetThunkCreator(dispatch))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OSBBCabinetPage);