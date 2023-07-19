import { Divider, Grid, Skeleton, Typography } from '@mui/material';
import { breakpoints } from '@mui/system';
import React from 'react';
import { BsFillGiftFill } from 'react-icons/bs';
import Carousel from 'react-elastic-carousel';

function CarouselSkeleton() {
    // const breakPoints = [

    //     { width: 380, itemsToShow: 1.1 ,itemsToScroll:1},
    //     { width: 410, itemsToShow: 1.25 ,itemsToScroll:1},  
    //     { width: 450, itemsToShow: 1.35 ,itemsToScroll:1},
    //     { width: 475, itemsToShow: 1.45 ,itemsToScroll:1},
    //     { width: 490, itemsToShow: 1.6 ,itemsToScroll:1},
    //     { width: 530, itemsToShow: 1.8 ,itemsToScroll:1},
    //     { width: 610, itemsToShow: 2 ,itemsToScroll:1},
    //     { width: 650, itemsToShow: 2 ,itemsToScroll:1},
    //     { width: 700, itemsToShow: 2.3 ,itemsToScroll:1},
    //     { width: 768, itemsToShow: 2.5 ,itemsToScroll:2},
    //     { width: 830, itemsToShow: 2.6 ,itemsToScroll:2},
    //     { width: 880, itemsToShow: 2.8 ,itemsToScroll:2},
    //     { width: 920, itemsToShow: 3 ,itemsToScroll:2},
    //     { width: 1000, itemsToShow: 3.2 ,itemsToScroll:2},
    //     { width: 1200, itemsToShow: 3.4 ,itemsToScroll:3},
    //     { width: 1500, itemsToShow: 4, itemsToScroll:3}
        
    // ];
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="slider">
            <Grid sx={{ display: 'flex', flexDirection: 'row', color: '#383838', mb: '40px', alignItems: 'center' }}>
                <Skeleton variant="rectangular" width={24} height={24} />

                <Typography
                    style={{
                        textAlign: 'left',
                        paddingLeft: '10px'
                    }}
                >
                    <Skeleton variant="text" width={100} height={30} />
                </Typography>
            </Grid>
            
            <Grid sx={{ marginRight: '10px', marginLeft: '15px' ,display: 'flex', flexDirection: 'row', } }>
            <Skeleton variant="circular" width={24} height={24} style={{position:"relative", top:"100px"}} />
                <Carousel itemPadding={[10, 10 ,0 ,0]}  showArrows={false}>
               
                    {skeletons.map((skeleton,index) => ( 

                        <Grid  key={index} >
                            <Skeleton skelton={skeleton} variant="rectangular"  width={278} height={198} sx={{ borderRadius: '10px' , margin:'10px'}} />
                        </Grid>
                    ))}
                 </Carousel>
            <Skeleton variant="circular" width={24} height={24} style={{position:"relative", top:"100px"}} />
            </Grid>
            {/* <Carousel breakPoints={breakPoints} showArrows={true} emulateTouch={true} swipeable={false}></Carousel> */}
            <Divider sx={{ mb: '40px', mt: '20px' }} />
        </div>
    );
}

export default CarouselSkeleton;
