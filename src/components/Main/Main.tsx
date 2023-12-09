import React from "react";
import s from './main.module.css'
import Profile from "../Profile/Profile";
import { Routes, Route } from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";

const Main: React.FC<any> = () => {
    console.log('Main rendered')
    return (
        <div className={s.container}>
            Main
                <Routes>
                    <Route path='/profile' element={<Profile/>} />
                    <Route path='/dialogs' element={<DialogsContainer/>}/>
                </Routes>
        </div>
    )
}

export default Main;

