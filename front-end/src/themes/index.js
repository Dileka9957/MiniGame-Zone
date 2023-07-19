import { createTheme } from '@mui/material/styles';
import { ThemeContext } from 'layout/Customization/themeContext';

// assets
import colors from 'assets/scss/_themes-vars.module.scss';

// project imports
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';
import { useContext } from 'react';
import { useState } from 'react';

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

function Theme(customization) {
    const color = colors;

    const darkTheme = {
        colors: color,
        heading: color.paper,
        paper: color.grey900,
        backgroundDefault: color.grey900,
        background: color.grey700,
        darkTextPrimary: color.grey200,
        darkTextSecondary: color.grey900,
        textDark: color.darkTextPrimary,
        menuSelected: color.secondaryDark,
        menuSelectedBack: color.secondaryLight,
        divider: color.grey200,
        customization
    };

    const lightTheme = {
        colors: color,
        heading: color.grey900,
        paper: color.paper,
        backgroundDefault: color.paper,
        background: color.primaryLight,
        darkTextPrimary: color.grey700,
        darkTextSecondary: color.grey500,
        textDark: color.grey900,
        menuSelected: color.secondaryDark,
        menuSelectedBack: color.secondaryLight,
        divider: color.grey200,
        customization
    };
    const mode = useContext(ThemeContext);

    //  console.log('modes',mode.isToggled)
    //const [thee,setThee] = useState(mode)
    const themeOption = mode.isToggled === true ? darkTheme : lightTheme;

    const themeOptions = {
        direction: 'ltr',
        palette: themePalette(themeOption),
        mixins: {
            toolbar: {
                minHeight: '48px',
                padding: '16px',
                '@media (min-width: 600px)': {
                    minHeight: '48px'
                }
            }
        },
        typography: themeTypography(themeOption)
    };

    const themes = createTheme(themeOptions);
    themes.components = componentStyleOverrides(themeOption);

    return themes;
}

export default Theme;
