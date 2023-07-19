import { Icon, ListItemIcon, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SideBarIcon from 'layout/MainLayout/Sidebar/SideBarIcon';
import React from 'react';

function CarouselCard({ categoryDetails }) {
    return (
        <Box
            sx={{
                minWidth: '140px',
                maxWidth: '200px',
                backgroundColor: '#8626FF',
                borderRadius: '30px',
                textAlign: 'center',
                fontSize: '12px',
                paddingLeft: '20px',
                paddingRight: '20px',
                color: 'white',
                paddingTop: '5px',
                paddingBottom: '5px'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <ListItemIcon sx={{ color: 'white' }}>{SideBarIcon(categoryDetails?.icon)}</ListItemIcon>
                <Typography>{categoryDetails?.categoryName}</Typography>
            </Box>
        </Box>
    );
}

export default CarouselCard;
