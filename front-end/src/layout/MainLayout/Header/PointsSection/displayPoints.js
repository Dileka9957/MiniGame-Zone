
import React from "react";
import { useTheme } from '@mui/material/styles';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Avatar, Box, ButtonBase, Tooltip, Typography } from '@mui/material';

function DisplayPoints(setPoints){
    const points = setPoints.setPoints
    const theme = useTheme();

return(

    <Tooltip title={ `Your Points: ${points}`}>


    <Avatar
        variant="rounded"
        sx={{
            ...theme.typography.commonAvatar,
            ...theme.typography.mediumAvatar,
            mr: 2,
            ml:2,
            width: 60,
            borderRadius:4,
            // paddingLeft: 3,
            // paddingRight:3,
            transition: 'all .2s ease-in-out',
            background: theme.palette.secondary.light,
            color: theme.palette.secondary.dark,
            '&:hover': {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.light
            }
        }}
        onClick={() => { }}
        color="inherit"
    >
       
        <WorkspacePremiumIcon />

            <Typography  component={'span'} sx={{ margin: '2px' }} >
                {`${points}`}
            </Typography>
       

    </Avatar>
    </Tooltip>


)

}
export default DisplayPoints