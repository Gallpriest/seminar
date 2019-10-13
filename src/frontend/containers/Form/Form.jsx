import React from 'react';
import * as cssMod from './Form.css';
import { INPUTS } from './Form.mock';
import InputText from '../../components/InputText';

const Form = ({ handleFormChange, handleGenerateMeme }) => {
    const onInputChange = event => {
        const { name, value } = event.target;
        handleFormChange(name, value);
    };

    const inputFields = INPUTS.map(({ label, name, id }) => (
            <InputText
                key={id}
                name={name}
                label={label}
                onChange={onInputChange}
            />
        )
    );

    return (
        <form className={cssMod.form}>
            { inputFields }
            <div className={cssMod.formBtn}>
                <button onClick={handleGenerateMeme}>Generate new image</button>
            </div>
        </form>
    )
};

export default Form;