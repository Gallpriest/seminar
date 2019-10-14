import React from 'react';
import Wrap from '../Wrap';
import { ContextProvider } from '../../context/ControlContext';

const App = () => {
    return (
        <ContextProvider>
            <Wrap />
        </ContextProvider>
    )
};

export default App;