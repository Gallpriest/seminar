import React from 'react';
import MemeHeader from '../../assets/images/meme_header.jpg';
import * as cssMod from './Header.css';
import { useControlContext } from '../../context/ControlContext';

/**
 * Задача №1
 * 
 */

const Header = () => {
    const { pageState } = useControlContext();

    let HEADER_TEMPLATE;
    if (pageState > 1) {
        HEADER_TEMPLATE = (
            <header className={cssMod.header}>
                <div className={cssMod.headerName}>
                    <img 
                        src={MemeHeader} 
                        alt="Картинка заголовка генератора мемов"
                    />
                    <h1>Meme Generator</h1>
                </div>
                <span>
                    Author: Anton Datsyuk
                </span>
            </header>
        );
    } else {
        HEADER_TEMPLATE = null;
    }  

    return (HEADER_TEMPLATE)
};

export default Header;