import React from "react";
import s from './main.module.css'
import Profile from "../Profile/Profile";

const Main: React.FC<any> = () => {
    console.log('Main rendered')
    return (
        <div className={s.container}>
            Main
            <Profile />
        </div>
    )
}

export default Main;

