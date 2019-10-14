import React from 'react';
import * as cssMod from './App.css';
import Header from '../Header';
import Main from '../Main';

const App = () => {
    return (
        <div className={cssMod.app}>
            <Header />
            <Main />
        </div>
    )
};

export default App;