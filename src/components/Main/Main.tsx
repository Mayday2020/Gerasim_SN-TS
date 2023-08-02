import React from "react";
import s from './main.module.css'

const Main: React.FC<any> = (props) => {
    console.log('Main rendered')
    return (
        <div className={s.container}>
            Main
        </div>
    )
}

export default Main;

