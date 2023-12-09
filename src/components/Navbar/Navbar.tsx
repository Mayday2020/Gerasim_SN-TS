import React from "react";
import s from './navbar.module.css'
import {Link} from "react-router-dom";



const Navbar: React.FC<any> = (props) => {
    console.log('Navbar rendered')
    return (
        <div className={s.container}>
            <ul className={s.link}>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/dialogs">Messages</Link></li>
                <li><Link to="/users">Users</Link></li>
            </ul>
        </div>
    )
}

export default Navbar