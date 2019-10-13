import React from 'react';
import MemeHeader from '../../assets/images/meme_header.jpg';
import * as cssMod from './Header.css';

const Header = () => {
    return (
        <header className={cssMod.header}>
            <div className={cssMod.headerName}>
                <img 
                    src={MemeHeader} 
                    alt="Картинка заголовка генератора мемов"
                />
                <h1>Meme Generator</h1>
            </div>
        </header>
    )
};

export default Header;