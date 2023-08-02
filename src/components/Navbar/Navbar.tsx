import React from "react";
import s from './navbar.module.css'



const Navbar: React.FC<any> = (props) => {
    console.log('Navbar rendered')
    return (
        <div className={s.container}>
            <ul className={s.link}>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">Users</a></li>
            </ul>
        </div>
    )
}

export default Navbar