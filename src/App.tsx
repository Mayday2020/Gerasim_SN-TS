import React from 'react'
import './App.css';
import {Header} from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";


const App: React.FC<any> = (props) => {
    console.log('App rendered')
    return (
        <div>
            <Header/>
            <Navbar/>
            <Main/>
        </div>
    );
}

export default App;

