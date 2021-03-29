import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import {Route, BrowserRouter, Switch} from "react-router-dom";

import HeaderContainer from "./components/Header/header";

import MainPage from "./components/Main/MainPage";
import AccountPage from "./components/AccountPage/AccountPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {

    return (

     <BrowserRouter>
         {/*<HeaderContainer/>*/}
         <div>
             <Switch>
                 <Route path='/main' component={MainPage}  />
                 <Route path='/account' component={AccountPage} />
                 <Route exact path='*' component={ErrorPage}/>
             </Switch>
         </div>

     </BrowserRouter>
  );
}
export default App;
