import { AccountBox, Article, Group, Home, ModeNight, Person, Settings, Storefront } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, Typography } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import AdminMenuList from './AdminMenuList/AdminMenuList';
import { styled } from '@mui/material/styles';
import { Scrollbars } from 'react-custom-scrollbars';

import { getAllcategories } from 'store/actions/Game Actions/game.action';

import { makeStyles, withStyles } from '@mui/styles';
import MuiListItem from '@mui/material/ListItem';

const AdminSidebar = ({ mode, setMode }) => {
    const Box = styled(ListItemText)({
        fontFamily: 'poppins',
        color: 'red',
        paddingLeft: '2px',
        paddingRight: '10px'
    });
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
        <div className="scrollbar">
            <AdminMenuList/>
        </div>
    );
};

export default AdminSidebar;
