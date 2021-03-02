import React from 'react';
import {NavLink} from "react-router-dom";
import "./header.scss";
import {connect} from "react-redux";
import {setRoleAC} from "../../redux/authReducer";


const Header = (props) => {

    const headerChangeRole = () => {
        let newRole = props.role === 'user' ? 'osbb' : 'user';
        props.dispatchChangeRole(newRole)
        alert(newRole)
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <div className="row w-100 justify-content-between">
                    <NavLink className="col navbar-brand" to="/main/login">VOTAN</NavLink>
                    <div className="row justify-content-end">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                                      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                        <div className="row collapse navbar-collapse w-100 align-content-end" id="navbarNavAltMarkup">
                            {props.role}
                            <div className="navbar-nav">

                                <NavLink className="nav-item nav-link" activeClassName={'active'} to="/account">Account</NavLink>

                                <NavLink
                                    className="nav-item nav-link"
                                    activeClassName={'active'}
                                    to="/account"
                                    onClick={headerChangeRole}
                                >OSBB/user</NavLink>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};



const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    role: state.auth.role
});

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchChangeRole: (role) => {
            dispatch(setRoleAC(role))
        }
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
