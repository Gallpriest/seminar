import React, { Fragment, useEffect } from 'react';
import * as cssMod from './Wrap.css';
import Controller from '../Controller';
import Header from '../Header';
import Main from '../Main';
import { useControlContext } from '../../context/ControlContext';

const Wrap = () => {
    const { pageState } = useControlContext();
    let HTML_TEMPLATE;

    switch (pageState) {
        case 1:
            HTML_TEMPLATE = null;
            break;
        default:
            HTML_TEMPLATE = (
                <Fragment>
                    <Header />
                    <Main />
                </Fragment>
            );
            break;
    }

    return (
        <div className={cssMod.wrap}>
            { HTML_TEMPLATE }
            <Controller />
        </div>
    )
};

export default Wrap;