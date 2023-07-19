import PropTypes from 'prop-types';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MuiListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MenuData } from 'views/admin/menuData';
import { makeStyles, withStyles } from '@mui/styles';


const drawerWidth = 170;

function AdminMenuList(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

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

    const drawer = (
        <div style={{marginTop:'80px'}}>
            <Divider />
            <List>
                {MenuData.map((item) => (
                    <ListItem key={item.id} button component="a" href={item.Link}>
                        <ListItemIcon>{item.Icon}</ListItemIcon>
                        <ListItemText primary={item.MenuName} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box flex={1} p={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/* <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }
                }}
            ></AppBar> */}
            <Box  >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

AdminMenuList.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func
};
export default AdminMenuList;