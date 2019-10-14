import React from 'react';
import * as cssMod from './Controller.css';
import Control from '../../components/Control';
import { useControlContext } from '../../context/ControlContext';

const Controller = () => {
    const { changePage } = useControlContext();
    
    return (
        <div className={cssMod.controller}>
            <Control direction="left" onClick={changePage} />
            <Control direction="right" onClick={changePage} />
        </div>
    )
};

export default Controller;