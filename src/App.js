import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";


function App(props) {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar state = {props.state.navbarPage} />
                <div className='app-wrapper-content'>
                    <Route render={() => <Profile state={props.state.profilePage}
                                                  dispatch = {props.dispatch}
                                                  newPostText={props.state.profilePage.newPostText}/>} path='/profile'/>
                    <Route render={() => <Dialogs state = {props.state.dialogsPage} />} path='/dialogs'/>
                </div>
            </div>
    )
}

export default App;
