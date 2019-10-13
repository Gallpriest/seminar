import React from 'react';
import * as cssMod from './App.css';
import Header from '../Header';
import Main from '../Main';

const App = () => {
    console.log('render')
    return (
        <div className={cssMod.app}>
            <Header />
            <Main />
        </div>
    )
};

export default App;