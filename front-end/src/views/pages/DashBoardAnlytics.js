import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAllcategories, getGamesForAdmin } from 'store/actions/Game Actions/game.action';
import { getContactUsRecords, getUserAction } from 'store/actions/user.action';
import AnlyticsCard from 'ui-component/cards/AnlyticsCard';

function DashBoardAnlytics() {
    const [GameArray, setArray] = useState([]);
    const [CategoryArray, setCategoryArray] = useState([]);
    const [UserArray, setUserArray] = useState([]);
    const [MessegeArray, setMessegeArray] = useState([]);

    //use effect for get Games
    useEffect(() => {
        getGamesForAdmin().then((data) => {
            console.log('data ', data);
            setArray(data);
        });
    }, []);

    //use effect for get categories
    useEffect(() => {
        getAllcategories().then((data) => {
            //console.log('data ', data);
            setCategoryArray(data);
        });
    }, []);

    //use effect for get users
    useEffect(() => {
        getUserAction().then((data) => {
            console.log('data ', data);
            setUserArray(data);
        });
    }, []);

    //use effect for get Messeges
    useEffect(() => {
        getContactUsRecords().then((data) => {
            console.log('data ', data);
            setMessegeArray(data);
        });
    }, []);
    // const array = [1, 2, 3, 4, 5];
    // console.log(array.length);
    return (
        <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <Grid item xl={3} lg={6} md={6} sm={12}>
                <AnlyticsCard
                    heading="Game Count"
                    subHeading="Active Games"
                    count={GameArray.length}
                    link="View Games"
                    linkHref="/admin-dashboard/gameUpload"
                />
            </Grid>
            <Grid item xl={3} lg={6} md={6} sm={12}>
                <AnlyticsCard
                    heading="Category Count"
                    subHeading="Active Categories"
                    count={CategoryArray.length}
                    link="View Categories"
                    linkHref="/admin-dashboard/categoryTable"
                />
            </Grid>
            <Grid item xl={3} lg={6} md={6} sm={12}>
                <AnlyticsCard
                    heading="User Count"
                    subHeading="Active Users"
                    count={UserArray.length}
                    link="View Users"
                    linkHref="/admin-dashboard/userTable"
                />
            </Grid>
            <Grid item xl={3} lg={6} md={6} sm={12}>
                <AnlyticsCard
                    heading="Messege Count"
                    subHeading="Active Messeges"
                    count={MessegeArray.length}
                    link="View Messeges"
                    linkHref="/admin-dashboard/ContactUsRecords"
                />
            </Grid>

            {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 40 }}></div> */}
        </Grid>
    );
}

export default DashBoardAnlytics;
