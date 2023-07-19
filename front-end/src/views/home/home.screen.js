import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { BsFillGiftFill } from 'react-icons/bs';
import { FaMedal } from 'react-icons/fa';
import Media from 'react-media';
// import PrimaryCard from 'ui-component/cards/Primary Card/PrimaryCard';
import Slider from 'ui-component/carousel/Carousel';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllGames, getGamesBySearch, getGamesByCategory, getGameDataAction } from 'store/actions/Game Actions/game.action';
import { useState } from 'react';
import { Box } from '@mui/material';
import { useEffect } from 'react';
//import GameBoxes from './gameBoxes';
import Carousel from 'ui-component/carousel/Carousel';
import CarouselSlider from 'ui-component/carousel/Carousel';
import MobileSearch from 'layout/MainLayout/MobileHeader/MobileSearch';
import SkeletonCard from 'ui-component/skeleton/SkeletonCard';
import CarouselSkeleton from 'ui-component/skeleton/CarouselSkeleton';
import Modal from 'ui-component/Modal/Modal';

// const isMobile = function () {
//     const match = window.matchMedia('pointer: coarse');
//     return match && match.matches;
// };

function Home() {

    const URL_path = window.location.pathname;
    const gameId = URL_path.substring(URL_path.length - 24);

    const location = useLocation();
    const [searchGames, setSearchGames] = useState();
    const [game, setGame] = useState('');
    const [gamesData, setGameData] = useState([]);
    const [categoryGames, setCategoryGames] = useState([]);
    const [searchedValue, setSearchQuery] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [gameDetailOfId, setGameDetailOfId] = useState({})
    const [open, setOpen] = React.useState(false);
    // const [isMobile, setMatch] = useState();
    // console.log('isMobile.....', isMobile);

    useEffect(() => {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let searchQuery = params.get('searchQuery');
        setSearchQuery(searchQuery);
  
        let category = params.get('category');
        setCategoryName(category);
        setIsLoading(true);

        if (searchQuery) {
            getGamesBySearch(searchQuery).then((data) => {
                // console.log('search games 🚀 ', data);
                setSearchGames(data);
                setGame('search');
                setIsLoading(false);
            });
        } else if (category) {
            if(category==="Rewarded"){
                // alert("rewarded");
                getAllGames().then((data) => {
                    const reward = data.filter(dt=>{
                        // console.log("qw",dt);
                        return dt.isRewardGame === 'true';
                    });

                    // const reward=data
                    // console.log("data from home",reward);
                    // console.log('category games 🚀 ', data);
                    setCategoryGames(reward);
                    setIsLoading(false);
                });
            }else{
            getGamesByCategory(category).then((data) => {
                // console.log('category games 🚀 ', data);
                setCategoryGames(data);
                setIsLoading(false);
            });
            }
        } else {
            getAllGames().then((data) => {
                // console.log('categorties.. 👍 ', data);
                // console.log('get all games', data);
                setGameData(data);
                setGame('all');
                setIsLoading(false);
            });
        }
    }, [location]);

    // useEffect(() => {
    //     if ((window, matchMedia('pointer: coarse'))) {
    //         setMatch(true);
    //     } else {
    //         setMatch(false);
    //     }
    // }, []);

    useEffect(() => {
        //console.log('gameId',gameId,gameId.length ===  24)

        if (gameId.length ===  24) {
            getGameDataAction(gameId).then((data) => {
                if (data) {
                    setGameDetailOfId(data?.gameDetails)
                    setOpen(true);
                }
            });
        }
        
    }, [gameId]);
    return (
        <>
            {(open && gameId.length ===  24) && <Modal gameDetails={gameDetailOfId} setOpen={setOpen} open={open} />}
            {isLoading && <CarouselSkeleton/>}
            {game === 'all' && <CarouselSlider />}

            
            {isLoading && <SkeletonCard />}
            {/* {game === 'all' && <GameBoxes dataArray={gamesData} />}

            { game === 'search' && <GameBoxes dataArray={searchGames} searchedValue={searchedValue} />}

            {!Array.isArray(searchGames) && Array.isArray(categoryGames) && <GameBoxes dataArray={categoryGames} categoryName={categoryName} />} */}

            <Media query="(min-width: 800px)">
                        {(matches) => {
                            return matches ?<Grid marginTop={"50px"}><img src="https://www.mpf.com.pe/wp-content/uploads/2022/06/free-from-NL-banner-animated.gif" alt="ads" width="99%"></img></Grid> : <></>;
                        }}
            </Media>
        </>
    );
}

export default Home;
