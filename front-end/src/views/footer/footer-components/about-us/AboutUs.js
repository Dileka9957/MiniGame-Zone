import { Box, Card, Typography } from '@mui/material';
import config from 'config';
import React, { useEffect } from 'react';
import Header from '../../../../layout/MainLayout/Header';

import MainCard from 'ui-component/cards/MainCard';
import { capitalizeFirstLetter } from 'utils/common';
import Footer from 'views/footer';




const AboutUs = () => {

    const HideSearch=true;
    // const user = (JSON.parse(localStorage.getItem('profile')));

    return (
        <>
            <div style={{padding:"12px"}}><Header option1={HideSearch} /></div>
            <Card sx={{ marginBottom: '10px', textAlign:'center' }}>
                <Typography variant="h1" ml={0} pt={1} pb={1} >About Us</Typography>
            </Card>

            <Box sx={{ height: "90%",  display: 'flex',  flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between',  }} >
                <Box padding={2} sx={{      }}>
                    
                    {/* <Typography variant="h4" gutterBottom component="div">
                    About Us
                </Typography> */}

                    <Typography sx={{textAlign:'center',fontSize:'2.5ch'}} variant="subtitle1" gutterBottom component="div">
                        Welcome to Mini Game Zone
                    </Typography>


                    <Typography pt={10} pl={20} pr={20} sx={{fontSize:'2ch',textAlign:'justify'}} variant="body2" gutterBottom >
                    We provide a collection of mini-games to you here at the 'mini-game-zone'. Whether you are an adult or a child, you deserve some me time during your busy day. 
                    we have selected more than 100 mini games that bring up some joy when you play them. And all of them are multiplayer games that you can play with numerous players from worldwide. 
                    <br/>we update our game list from time to time to give the best experience to you.

                    Also, leader board of each game will tell you who is the best player among others so far and you can also climb up the list if you are good at it. 
                    We value your opinion in every aspect, So please leave a comment about the games and the experience that you gain along with your suggestions to us. Happy Gaming!     
    
                    
                    </Typography>
                </Box>
                <Box sx={{width:'100%',position:'fixed',bottom:'0px'}}>
                <Footer />
                </Box>


            </Box>
        </>
    )
}

export default AboutUs
