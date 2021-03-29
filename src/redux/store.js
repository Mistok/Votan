import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";

import signInReducer from "./authReducer";
import apartmentsReducer from "./apartmentsReducer";
import usersCabinetReducer from "./usersCabinetReducer";
import usersListReducer from "./usersListReducer";
import singleUserInfoReducer from "./singleUserInfoReducer";
import activeVotingReducer from "./activeVotingsReducer";
import OSBBCabinetReducer from "./OSBBCabinetReducer";
import CLIENTCabinetReducer from "./CLIENTCabinetReducer";

let reducers = combineReducers({
    // cabinet: usersCabinetReducer,
    // apartments: apartmentsReducer,
    CLIENTsCabinet: CLIENTCabinetReducer,
    OSBBsCabinet: OSBBCabinetReducer,
    usersList: usersListReducer,
    singleUser: singleUserInfoReducer,
    auth: signInReducer,
    activePolls: activeVotingReducer,
    form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,  composeWithDevTools(applyMiddleware(thunk)));

window.store = store;

export default store ;