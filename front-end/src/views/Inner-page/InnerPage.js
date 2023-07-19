//InnerPage = game.screen page

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LeaderBoard from 'ui-component/LeaderBoard/LeaderBoard';
import './InnerPage.scss';
import { Typography, Button, Stack, Divider, Rating, Hidden } from '@mui/material';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { useEffect } from 'react';
import { getGameDataAction, getGamesByCategory, getPointsAction} from 'store/actions/Game Actions/game.action';
import { useLocation, useNavigate } from 'react-router-dom';
import Comment from 'ui-component/comments/Comment';
import Carousel from 'react-elastic-carousel';
import GameBox from 'ui-component/GameBoxes/gameBox';
import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import OutsideClickHandler from 'react-outside-click-handler';
import { IoMdMedal } from 'react-icons/io';
import { isMobile } from 'react-device-detect';

import 'react-spring-bottom-sheet/dist/style.css';
import Media from 'react-media';
import MobileLeaderboard from 'ui-component/MobileLeaderboard/MobileLeaderboard';
import { useSelector } from 'react-redux';
import ScreenSkeleton from 'ui-component/skeleton/InnerPageSkeleton/ScreenSkeleton';
import { postPointsAction, postRatingAction } from 'store/actions/Game Actions/postGame.action';

export default function InnerPage() {
    const { isLoading } = useSelector((state) => state.gameReducer);
    const handle = useFullScreenHandle();
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0)
    const [gameData, setGameData] = useState('');
    const [CategoryData, setCategoryData] = useState('');
    const [relatedGames, setRelatedGames] = useState([]);
    const [mobile, setMobile] = useState();
    const [isRewarded, setIsRewarded] = useState(false);
    const [score, setScore] = useState();
    const [gameID,setGameID] =useState()
    const { user } = JSON.parse(localStorage.getItem('profile'));
    const [points,setPoints] = useState();

    const id1 = gameID;
    const id2 = user?._id;
    const urlWithIds = `${gameData.gameUrl}?id1=${id1}&id2=${id2}`;

    //check whether the device is mobile or not
    useEffect(() => {
        isMobile ? setMobile(true) : setMobile(false);
    }, []);
  

    useEffect(() => {
        const URL_path = window.location.pathname;
        const gameId = URL_path.substring(URL_path.length - 24);
        setGameID(gameId)
        // console.log('gameId', gameId);

        getGameDataAction(gameId).then((data) => {
            setGameData(data.gameDetails);
            setIsRewarded(data.gameDetails.isRewardGame);
            setCategoryData(data.gameDetails.categories);
            // get related data from categories
        });
    }, []);

    useEffect(() => {
        getGamesByCategory(CategoryData).then((data) => {
            setRelatedGames(data.records);
        });
    }, [CategoryData]);

    useEffect(() => {
        const URL_path = window.location.pathname;
        const gameid = URL_path.substring(URL_path.length - 24);
        getPointsAction(gameid).then((data)=>{
        if(data.pointData.length> 0){          
            setPoints(data)
            setScore("true")
        }
        else {
            setScore("false")
        }
        })
    }, [gameID]);

    // useEffect(() => {
    //     const score = 400
    //     postPointsAction(user?.name,score,user?._id,gameID,user?.picture)
    // }, [gameID]);


    const saveRating = (event, newValue ) => {
        setRating(newValue)
        postRatingAction(newValue, user._id, gameID)
    }         
   

    const breakPoints = [
        { width: 100, itemsToShow: 1 },
        { width: 300, itemsToShow: 2 },
        { width: 650, itemsToShow: 2.3 },
        { width: 768, itemsToShow: 4.3 },
        { width: 1200, itemsToShow: 5.3 },
        { width: 1500, itemsToShow: 5.3 }
    ];
    //console.log('isloading...', isLoading);

    return (
        <>
            <OutsideClickHandler
                onOutsideClick={() => {
                    setOpen(false);
                }}
            >
                <BottomSheet open={open} >
                    <MobileLeaderboard points={points}/>
                </BottomSheet>
            </OutsideClickHandler>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item sm={12} xs={12} md={9}>
                        <Box className="game-view">
                            <FullScreen handle={handle}>
                                <iframe
                                    src={urlWithIds}
                                    title="Smash Karts"
                                    style={{
                                        height: handle.active ? '100vh' : '65vh',
                                        width: '100%',
                                        objectFit: 'fill'
                                    }}
                                ></iframe>
                                {handle.active && (
                                    <Button
                                        variant="contained"
                                        onClick={handle.exit}
                                        //  style={{
                                        //     position: 'absolute'
                                        // }}
                                    >
                                        Exit Full Screen
                                    </Button>
                                )}
                            </FullScreen>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                                <Typography component="legend">{rating ? 'Your Rating is :' : 'Give me your Rating :'}</Typography>
                                <Rating
                                    name="simple-controlled"
                                    value={rating}
                                    onChange={(event, newValue) => saveRating(event, newValue)}
                                />
                                {/* <Button sx={{ backgroundColor: '#673ab7', ml: 4 }} variant="contained" onClick={handle.enter}>
                                    Full Screen
                                </Button> */}
                           <AiOutlineFullscreen className="fullscreen-icon" onClick={handle.enter} />
                            </Box>
 
                        </Box>
                        {isLoading && <ScreenSkeleton />}
                        <Typography sx={{ fontSize: '20px', fontWeight: '800', marginTop: '20px' }} variant="h5">
                            {gameData?.name}
                        </Typography>
                        <Typography sx={{ fontSize: '14px', fontWeight: '400', marginTop: '5px' }} variant="h5">
                            {gameData?.description}
                        </Typography>

                        {isMobile && isRewarded === 'true'&& score === 'true' &&(
                            <Button
                                onClick={() => setOpen(true)}
                                className="leaderboard-button"
                                sx={{
                                    bgcolor: '#8626ff',
                                    color: 'white',
                                    borderRadius: '10px',
                                    padding: '5px 20px',
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        backgroundcolor: '#0055ff',
                                        color: 'white'
                                    }
                                }}
                            >
                                <Typography>LeaderBoard</Typography>
                            </Button>
                        )}

                        <Comment />
                        <Divider sx={{ marginTop: '20px', mb: '30px' }} />
                        {isMobile === false && (
                            <>
                                <Typography sx={{ fontSize: '18px', fontWeight: '800', margin: '20px 0 20px 70px' }} variant="h5">
                                    Related Games
                                </Typography>

                                <Carousel itemPadding={[10, 10]} breakPoints={breakPoints} className="carousel-dots">
                                    {relatedGames.map((game, key) => {
                                        return <GameBox gameDetails={game} key={game._id} />;
                                    })}
                                </Carousel>
                            </>
                        )}
                    </Grid>
                    <Grid item sm={12} xs={12} md={3}>
                        {!isMobile && isRewarded === 'true' && score === 'true' && <LeaderBoard points={points} />}

                        {!isMobile && isRewarded === 'true' && score === 'false' && (
                            <Grid className="banner-image">
                                <img src="https://i.postimg.cc/vTRZFwtp/41oo9b3q-Lm-L.jpg" alt="ads"></img>
                            </Grid>
                        )}

                        {!isMobile && isRewarded === 'false' && score === 'false' &&(
                            <Grid className="banner-image">
                                <img src="https://i.postimg.cc/vTRZFwtp/41oo9b3q-Lm-L.jpg" alt="ads"></img>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

