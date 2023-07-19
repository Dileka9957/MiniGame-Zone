import React from 'react';
import MuiListItem from '@mui/material/ListItem';
import { motion } from 'framer-motion';
import { makeStyles, withStyles } from '@mui/styles';
import { Box } from '@mui/system';

import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';

function AdminNavMenu() {

    const ListItem = withStyles({
        root: {
            '&$selected': {
                backgroundColor: 'red',
                color: 'white',
                '& .MuiListItemIcon-root': {
                    color: 'white'
                }
            },
            '&$selected:hover': {
                backgroundColor: '#8626FF',
                color: 'white',
                '& .MuiListItemIcon-root': {
                    color: 'white'
                }
            },
            '&:hover': {
                backgroundColor: '#8626FF',
                color: 'white',
                '& .MuiListItemIcon-root': {
                    color: 'white'
                }
            }
        },
        selected: {}
    })(MuiListItem);

    return (   
            <Box display={'flex'}  >
                        <ListItem sx={{borderRadius:'10px',fontSize:'8px',}} disablePadding={true} component="a" href={'/admin-dashboard/categoryTable'}>
                        <AutoAwesomeMotionIcon /><h1>&nbsp;Categories</h1>
                        </ListItem>
                        <ListItem sx={{borderRadius:'10px',fontSize:'8px'}}disablePadding={true} component="a" href={'/admin-dashboard/gameUpload'}>
                        <SportsEsportsIcon /><h1>&nbsp;Games</h1>
                        </ListItem>                        
                        <ListItem sx={{borderRadius:'10px',fontSize:'8px'}}disablePadding={true} component="a" href={'/admin-dashboard/userTable'}>
                        <PersonIcon /><h1>&nbsp;Users</h1>
                        </ListItem>
                        <ListItem sx={{borderRadius:'10px',fontSize:'8px'}}disablePadding={true} component="a" href={'/admin-dashboard/ContactUsRecords'}>
                        <MessageIcon /><h1>&nbsp;Messages</h1>
                        </ListItem>
            </Box>
    );
}

export default AdminNavMenu;
