import React from 'react';
import { useTheme } from '@emotion/react';

import MainCard from 'ui-component/cards/MainCard';

const Settings = () => {

    const theme = useTheme();

    return (
        <MainCard sx={{
            mt: 3, 
            border: '1px solid',
            borderColor: theme.palette.primary.light,
            ':hover': {
                boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
            },
            height: '100vh',

        }}>
            
        </MainCard>
    )
}

export default Settings
