import React, { createContext, useState } from 'react';
import { ReactDOM } from 'react-dom/client';

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const [isToggled, setIsToggled] = useState(JSON.parse(localStorage.getItem('isToggled')));
    // console.log(isToggled,'isToggled')

    return <ThemeContext.Provider value={{ isToggled, setIsToggled }}>{props.children}</ThemeContext.Provider>;
};
