import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './../Components/HomePage';
import UserSignInPage from './../Components/UserSignInPage';
import NotFoundPage from './../Components/NotFoundPage';
import HelpPage from './../Components/BGHelp';
import ToolBar from './../Components/Toolbar';
import DriverSignInPage from './../Components/DriverSignInPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import LoginPage from './../Components/LoginPage';
import Login from './../Components/Login';
import RidePage from './../Components/RidePage';
import MapPage from './../Components/MapPage';
import Home from './../Components/BGHome';
import About from './../Components/BGAbout';
import Contact from './../Components/BGContact';
import Gallery from './../Components/BGGallery';
import Time from './../Components/time';
import Logout from './../Components/Logout';
import Grid from './../Components/grid';
import ChildCare from './../Components/Childcare';
import Calendar from './../Components/Calendar';
import terms from './../Components/BGAgree';
import destination from './../Components/Destination';

const AppRouter = () => (
    <BrowserRouter>
        <MuiThemeProvider>
            <ToolBar />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/UserSignIn" component={UserSignInPage} />
                <Route path="/DriverSignIn" component={DriverSignInPage} />
                <Route path="/Login" component={Login} />
                <Route path="/help" component={HelpPage} />
                <Route path="/bookACab" component={RidePage} />
                <Route path="/map" component={MapPage} />
                <Route path="/Home" component ={Home}/>
                <Route path="/About" component ={About}/>
                <Route path="/Contact" component ={Contact}/>
                <Route path="/Gallery" component ={Gallery}/>
                <Route path="/Grid" component ={Grid}/>
                <Route path="/Time" component ={Time}/>
                <Route path="/Logout" component ={Logout}/>
                <Route path="/ChildCare" component ={ChildCare}/>
                <Route path="/Calendar" component ={Calendar}/>
                <Route path="/Agree" component ={terms}/>
                <Route path="/destination" component ={destination}/>
              
                <Route component={NotFoundPage} />
                
            </Switch>
        </MuiThemeProvider>
    </BrowserRouter>
);

export default AppRouter;
