import React from 'react'
import s from './app.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";


const App: React.FC<any> = () => {
    return (
        <div className={s.mainContainer}>
            <Header/>
            <div className={s.container}>
                <Navbar/>
                <Main/>
            </div>
        </div>
    );
}

export default App;

