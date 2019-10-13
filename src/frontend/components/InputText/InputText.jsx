import React, { Fragment } from 'react';
import * as cssMod from './InputText.css';

const InputText = props => {
    const { 
        label,
        onChange,
        value,
        name
    } = props;

    const htmlLabel = label && <div className={cssMod.label}>{ label }</div>

    return (
        <Fragment>
            { htmlLabel }
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                className={cssMod.inputText}
            />
        </Fragment>
    )
};

export default InputText;