import * as React from 'react';
import s from './header.module.css'

export default function Header() {
    console.log('Header rendered')
    return (
        <div className={s.container}>
            Header
        </div>
    );
}
