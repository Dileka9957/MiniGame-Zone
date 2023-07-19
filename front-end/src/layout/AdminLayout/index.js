import { useTheme } from '@mui/material/styles';
import { Divider, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Media from 'react-media';
import AdminMenu from './AdminNavMenu/AdminNavMenu';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSideBar/AdminSideBar';
import Footer from 'views/footer';
import { Outlet } from 'react-router-dom';


const AdminLayout = () => {
    const theme = useTheme();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} sx={{ position: 'relative' }}>
                {/* ================================Header============================ */}
                <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={12}
                    md={12}
                    sx={{ padding: '12px', zIndex: '1', backgroundColor: theme.palette.background.paper, position: 'fixed', width: '100%' }}
                >
               
                    <AdminHeader/>
                    <br/>
                    <Divider />    
                </Grid>
                
                {/* ================================SideBar============================ */}
                <Media query="(max-width: 900px)">
                    {(matches) => {
                        return matches ? (
                            <Grid item sm={12} md={12} xs={12} sx={{ paddingTop: { xs: '100px', sm: '100px' } }}>
                                <AdminMenu />
                            </Grid>
                        ) : (
                            <Grid item md={2} lg={1.5} sx={{ position: 'relative', paddingTop: { md: '80px', lg: '100px', zIndex:'0' } }}>
                                <AdminSidebar />
                            </Grid>
                        );
                    }}
                </Media>
                {/* ========================================Body============================== */}

                <Grid
                
                    item
                    xs={12}
                    sm={12}
                    md={10}
                    lg={10.5}
                    sx={{ padding: { xs: '20px 20px', sm: '20px 20px', md: '120px 20px', lg: '140px 20px' }, position: 'relative' }}
                >
                    <Outlet />
                </Grid>
            </Grid>
            <Grid sx={{zIndex: '5'}}><Footer/></Grid>
            
        </Box>
    );
};

export default AdminLayout;