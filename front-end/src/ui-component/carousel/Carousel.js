import React from 'react';
import { useTheme } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';
import BigCard from 'ui-component/cards/BigCard';
import SubCard from 'ui-component/cards/SubCard';
import { Divider, Grid, Typography } from '@mui/material';
import SecondaryCard from 'ui-component/cards/SecondaryCard';
import { styled } from '@mui/styles';
import { useState, useEffect } from 'react';
import { getLatestGames } from 'store/actions/Game Actions/game.action';
import { BsFillGiftFill } from 'react-icons/bs';
import Carousel from 'react-elastic-carousel';
import CarouselSkeleton from 'ui-component/skeleton/CarouselSkeleton';
import './Carousel.scss';
import Media from 'react-media';


function CarouselSlider() {
    const theme = useTheme();
    const [games, setGameData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const limit = 12;

    useEffect(() => {
        getLatestGames(limit).then((data) => {
            console.log('Game data for slider 👍 ',data);
            setGameData(data.records);
            setIsLoading(true); 
        });
    }, []);

    const getdbRating = (gameData) => {
        if (Array.isArray(gameData?.rating) && gameData?.rating.length > 0) {
            const avgRating =
                gameData?.rating.map((gameDetail) => gameDetail.ratedValue).reduce((partialSum, a) => partialSum + a, 0) /
                gameData?.rating.length;

            // console.log(avgRating);
            if (Number.isInteger(avgRating)) {
                // setDbRating(avgRating);
                return avgRating;
            } else {
                const onePlacedFloat = parseFloat(avgRating).toFixed(1);
                // setDbRating(onePlacedFloat);
                return onePlacedFloat;
            }
        }
    };
    const breakPoints = [

        { width: 380, itemsToShow: 1.1 ,itemsToScroll:1},
        { width: 410, itemsToShow: 1.25 ,itemsToScroll:1},  
        { width: 450, itemsToShow: 1.35 ,itemsToScroll:1},
        { width: 475, itemsToShow: 1.45 ,itemsToScroll:1},
        { width: 490, itemsToShow: 1.6 ,itemsToScroll:1},
        { width: 530, itemsToShow: 1.8 ,itemsToScroll:1},
        { width: 610, itemsToShow: 2 ,itemsToScroll:1},
        { width: 650, itemsToShow: 2 ,itemsToScroll:1},
        { width: 700, itemsToShow: 2.3 ,itemsToScroll:1},
        { width: 768, itemsToShow: 2.5 ,itemsToScroll:2},
        { width: 830, itemsToShow: 2.6 ,itemsToScroll:2},
        { width: 880, itemsToShow: 2.8 ,itemsToScroll:2},
        { width: 920, itemsToShow: 3 ,itemsToScroll:2},
        { width: 1000, itemsToShow: 3.2 ,itemsToScroll:2},
        { width: 1200, itemsToShow: 3.4 ,itemsToScroll:3},
        { width: 1500, itemsToShow: 4, itemsToScroll:3}
        
    ];

    // const settings = {
    //     infinite: true,
    //     speed: 500,
    //     itemsToShow: 5,
    //     itemsToScroll: 5,
    //     initialActiveIndex: -1,
    //     responsive: [
    //         {
    //             breakpoint: 1700,
    //             settings: {
    //                 itemsToShow: 4.3,
    //                 itemsToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 1500,
    //             settings: {
    //                 itemsToShow: 4,
    //                 itemsToScroll: 3,
    //                 initialActiveIndex: 3
    //             }
    //         },
    //         {
    //             breakpoint: 1400,
    //             settings: {
    //                 itemsToShow: 3.3,
    //                 itemsToScroll: 3,
    //                 initialActiveIndex: 3
    //             }
    //         },
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 itemsToShow: 3,
    //                 itemsToScroll: 3,
    //                 initialActiveIndex: 3
    //             }
    //         },
    //         {
    //             breakpoint: 1100,
    //             settings: {
    //                 itemsToShow: 2.3,
    //                 itemsToScroll: 3,
    //                 initialActiveIndex: 3
    //             }
    //         },
    //         {
    //             breakpoint: 900,
    //             settings: {
    //                 itemsToShow: 2.5,
    //                 itemsToScroll: 3,
    //                 initialActiveIndex: 3
    //             }
    //         },
    //         {
    //             breakpoint: 800,
    //             settings: {
    //                 itemsToShow: 2,
    //                 itemsToScroll: 3,
    //                 initialActiveIndex: 3
    //             }
    //         },
    //         {
    //             breakpoint: 700,
    //             settings: {
    //                 itemsToShow: 2,
    //                 itemsToScroll: 3,
    //                 initialActiveIndex: 3
    //             }
    //         },
    //         {
    //             breakpoint: 660,
    //             settings: {
    //                 itemsToShow: 1.7,
    //                 itemsToScroll: 3,
    //                 initialActiveIndex: 3
    //             }
    //         },
    //         {
    //             breakpoint: 610,
    //             settings: {
    //                 itemsToShow: 1.5,
    //                 itemsToScroll: 3,
    //                 initialActiveIndex: 3
    //             }
    //         },
    //         {
    //             breakpoint: 530,
    //             settings: {
    //                 itemsToShow: 1.3,
    //                 itemsToScroll: 3,
    //                 initialActiveIndex: 3
    //             }
    //         },
    //         {
    //             breakpoint: 470,
    //             settings: {
    //                 itemsToShow: 1.3,
    //                 itemsToScroll: 2,
    //                 initialActiveIndex: 3
    //             }
    //         },
    //         {
    //             breakpoint: 445,
    //             settings: {
    //                 itemsToShow: 1.3,
    //                 itemsToScroll: 2,
    //                 initialActiveIndex: 0.5
    //             }
    //         },
    //         {
    //             breakpoint: 410,
    //             settings: {
    //                 itemsToShow: 1.1,
    //                 itemsToScroll: 2,
    //                 initialActiveIndex: 0.3
    //             }
    //         },
    //         {
    //             breakpoint: 380,
    //             settings: {
    //                 itemsToShow: 1,
    //                 itemsToScroll: 3,
    //                 initialActiveIndex: 0.3
    //             }
    //         }

    //     ]
    // };

    return (
        <>
            {isLoading ? (
                <div className="slider">
                    <Grid sx={{ display: 'flex', flexDirection: 'row', color: theme.palette.text.primary, mb: '40px' }}>
                        <BsFillGiftFill size="22px" />

                        <Typography
                            style={{
                                textAlign: 'left',
                                paddingLeft: '10px',
                                fontFamily: 'poppins',
                                fontWeight: '600',
                                fontSize: 18,
                                color: theme.palette.text.primary
                            }}
                        >
                            Latest Games
                        </Typography>
                    </Grid>
                    <div style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                        <Carousel itemPadding={[10, 10 ,0 ,0]} breakPoints={breakPoints}  >
                            {games.map((game, key) => {
                                    return <SecondaryCard _id={game._id} name={game.name} imgUrl={game.imgUrl}  description={game.description} rating={getdbRating(game)} key={game._id} />;
                            })}
                        </Carousel>
                    </div>
                    {/* <Carousel breakPoints={breakPoints} showArrows={true} emulateTouch={true} swipeable={false}></Carousel> */}
                    {/* <Divider sx={{ mb: '40px', mt: '20px' }} /> */}


                    <Media query="(min-width: 800px)">
                        {(matches) => {
                            return matches ?<Grid><img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/8b9697124788849.610b604a2c7c1.jpg" alt="ads" width="99%"></img></Grid> : <></>;
                        }}
                    </Media>
                    
                    <Divider sx={{ mb: '40px', mt: '20px' }} />

                    <Grid sx={{ display: 'flex', flexDirection: 'row', color: theme.palette.text.primary, mb: '40px' }}>
                        <BsFillGiftFill size="22px" />

                        <Typography
                            style={{
                                textAlign: 'left',
                                paddingLeft: '10px',
                                fontFamily: 'poppins',
                                fontWeight: '600',
                                fontSize: 18,
                                color: theme.palette.text.primary
                            }}
                        >
                            Recommended Games
                        </Typography>
                    </Grid>
                </div>
            ) : (
                <CarouselSkeleton />
            )}
        </>
    );
}

export default CarouselSlider;
//  <Carousel itemPadding={[10, 10]} breakPoints={breakPoints}>
//      {games.map((game) => {
//          if (game?.categories === Simulation) return <SecondaryCard name={game.name} image={game.imgUrl} rating={getdbRating(game)} />;
//      })}
//  </Carousel>;

//  <Carousel itemPadding={[10, 10]} breakPoints={breakPoints}>
//      {games.map((game) => (
//          <SecondaryCard name={game.name} image={game.imgUrl} rating={getdbRating(game)} />
//      ))}
//  </Carousel>;
