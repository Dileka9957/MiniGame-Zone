import { Button, getRatingUtilityClass, Grid, Box } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { display, styled } from '@mui/system';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import '../cards/scss/PrimaryCard.scss';
import { HiStar } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import { getAllGames, getRatingAction } from 'store/actions/Game Actions/game.action';
import CategoryIcon from 'ui-component/cards/Primary Card/Primary Card Component/CategoryIcon';
import Modal from 'ui-component/Modal/Modal';
import { useRef } from "react";
import ContextMenu from "@agjs/react-right-click-menu";
import RightClickMenu from './RightClickMenu';


//game Actions

function GameBox({ gameDetails }) {
    const theme = useTheme();
    const [games, setGameData] = useState([]);
    //console.log('games 👎 ', games);
    const [isMenuShown, setIsMenuShown] = useState(false);
    const ref = useRef();

    const [dbRating, setDbRating] = useState();
    const [open, setOpen] = React.useState(false);
    const [game, setGameDetails] = useState('');
    const [mousex, setmousex] = useState(0);
    const [mousey, setmousey] = useState(0);



    const handleClick = () => {
        setOpen(true);
        // console.log('clicked',gameDetails);
        // setGameDetails(gameDetails);
        const game = gameDetails;
        console.log('game 👎 ', game);
        setGameDetails(game);
    };

    useEffect(() => {
        getRatingAction(gameDetails._id).then((data) => {
            if (data.ratingData.length > 0) {

                const sum = data.ratingData.map(item => item.ratedValue).reduce((prev, next) => prev + next)
                const count = data.ratingData.length
                const avg = sum / count
                setDbRating(avg)
            }
            else {
                setDbRating('No Rating')
            }

        })
    }, []);

    const CardContent = styled(Typography)({
        fontFamily: 'poppins',
        fontSize: '32px',
        fontWeight: '600',
        justifyContent: 'space-between'
    });

    const rightclick = (evt) => {
        evt.preventDefault();
        var x = evt.clientX;
        var y = evt.clientY;
        setmousex(x);
        setmousey(y);
        setIsMenuShown(true);
    }

    //   console.log("game box",gameDetails.isRewardGame);

    return (
        <>
            <RightClickMenu style={{ zIndex: "1" }}
                isOpen={isMenuShown}
                setIsOpen={setIsMenuShown}
                x={mousex}
                y={mousey}
                gameDetails={gameDetails}
                setOpen={setOpen}
                setGameDetails={setGameDetails} />

            {/* <a href={`/innerPage/${gameDetails?._id}`} target="_blank"> */}
            {open && <Modal gameDetails={game} setOpen={setOpen} open={open} dbRating={dbRating} />}
            <Button data-id={gameDetails._id} id="game_btn" style={{ zIndex: "0" }} onClick={handleClick} onContextMenu={rightclick}  >
                <Card className="primarycard">
                    {gameDetails.isRewardGame === "true" && <CategoryIcon className="categoryicon" />}



                    <CardMedia className="media" component="img" image={gameDetails?.imgUrl} alt="green iguana" />
                    <CardContent className="content">
                        <Typography
                            className="gameName"
                            // gutterBottom
                            // variant="h5"
                            // component={'div'}
                            style={{ fontSize: '12px', fontWeight: '600', fontFamily: 'poppins', color: theme.palette.text.primary }}
                        >
                            {gameDetails?.name}
                        </Typography>

                        {/* <Typography component={'span'}> */}
                            <Box>
                                <Typography fontSize={'12px'} style={{ display: 'flex', alignItems: 'center' }}>
                                  {dbRating} { !isNaN(dbRating) && <HiStar className="rating" size={'16px'} /> }  
                                </Typography>
                            </Box>
                        {/* </Typography> */}
                    </CardContent>
                </Card>
            </Button>
            {/* <div style={{backgroundColor:"yellow",border:"1px", borderStyle:"solid"}} ><button id={gameDetails?.name} ref={ref}>Click me</button></div> */}
            {/* </a> */}
        </>
    );
}

export default GameBox;