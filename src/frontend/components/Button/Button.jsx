import React from 'react';
import * as cssMod from './Button.css';

const Button = props => {
    const { 
        text,
        onClick,
    } = props;

    return (
        <button
            type="button"
            className={cssMod.button}
            onClick={onClick}
        >
            { text }
        </button>
    )
};

export default Button;