import React from "react";
import s from './main.module.css'
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import { Routes, Route } from "react-router-dom";

const Main: React.FC<any> = () => {
    console.log('Main rendered')
    return (
        <div className={s.container}>
            Main
                <Routes>
                    <Route path='/profile' element={<Profile/>} />
                    <Route path='/dialogs' element={<Dialogs/>} />
                </Routes>
            {/*<Profile />*/}
            {/*<Dialogs/>*/}
        </div>
    )
}

export default Main;

