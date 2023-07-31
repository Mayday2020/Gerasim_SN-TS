import React from "react";
import s from './navbar.module.css'



const Navbar: React.FC<any> = (props) => {
    console.log('Navbar rendered')
    return (
        <div className={s.link}>
            <a href="#">Navbar</a>
        </div>
    )
}

export default Navbar