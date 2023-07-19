import { Card, CardContent, Grid, Skeleton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import '../cards/scss/PrimaryCard.scss';

function SkeletonCard() {
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    return (
        <>
            {/* <Grid sx={{ display: 'flex', flexDirection: 'row', color: '#383838', mb: '40px', alignItems: 'center' }}>
                <Skeleton variant="rectangular" width={24} height={24} />

                <Typography
                    style={{
                        textAlign: 'left',
                        paddingLeft: '10px'
                    }}
                >
                    <Skeleton variant="text" width={100} height={30} />
                </Typography>
            </Grid> */}
            <Grid container spacing={2}>
                {skeletons.map((skeleton,index) => (
                    <Grid item xs={4} sm={3} md={3} lg={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} key={index}>
                        <Box className="skelton-wrap" sx={{ display: 'flex', flexDirection: 'column' }} >
                            <Skeleton
                                skeleton={skeleton}
                                variant="rectangular"
                                className="skelton-box"
                                sx={{ borderRadius: '10px', display: 'flex', justifyContent: 'center' }}
                            ></Skeleton>
                            <Skeleton variant="text" width={100} height={20} sx={{ display: 'flex', justifyContent: 'flex-start' }} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default SkeletonCard;
{
    /* <Card className="primarycard">
    <CardMedia className="media" component="img" image={gameDetails?.imgUrl} alt="green iguana" />
    <CardContent className="content">
        <Typography
            className="gameName"
            gutterBottom
            variant="h5"
            component={'span'}
            sx={{ fontSize: '12px', fontWeight: '400', fontFamily: 'poppins' }}
        >
            {gameDetails?.name}
        </Typography>
    </CardContent>
</Card>; */
}
