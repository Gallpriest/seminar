import React, { createContext, useContext, useState } from 'react';

const ControlContext = createContext({
    pageState: 1,
    changePage: () => {},
});

export const useControlContext = () => useContext(ControlContext);

export const ContextProvider = ({ children }) => {
    const initialState = localStorage.getItem('pageState') ? parseInt(localStorage.getItem('pageState')) : 1;
    const [pageState, setPageState] = useState(initialState);
    localStorage.setItem('pageState', pageState);

    const context = {
        pageState,
        changePage: direction => {
            switch (direction) {
                case 'left':
                    pageState > 1 ? setPageState(pageState - 1) : setPageState(1);
                    break;
                case 'right':
                    pageState < 4 ? setPageState(pageState + 1) : setPageState(4);
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <ControlContext.Provider value={context}>{ children }</ControlContext.Provider>
    )
};