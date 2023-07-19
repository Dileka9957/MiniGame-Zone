import React from 'react';
import { useState } from 'react';
import { Switch } from '@mui/material';
import { ThemeContext } from './themeContext';
import { useContext } from 'react';
import "./switchTheme.scss";

function SwitchTheme() {
    const { isToggled, setIsToggled } = useContext(ThemeContext);

    const handleToggle = (ev) => {
       
        setIsToggled(!isToggled);
        
        localStorage.setItem('isToggled', !isToggled);

       
    };

    return (
        <div style={{ display: 'flex' }}>
            
            <Switch className='switch' color='secondary' 
                onClick={handleToggle} checked={isToggled}
            ></Switch>

        </div>
    );
}

export default SwitchTheme;
