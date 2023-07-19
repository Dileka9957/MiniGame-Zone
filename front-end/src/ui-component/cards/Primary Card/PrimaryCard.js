import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { display, styled } from '@mui/system';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import '../scss/PrimaryCard.scss';
import { HiStar } from 'react-icons/hi';
import CategoryIcon from './Primary Card Component/CategoryIcon';
import { useState, useEffect } from 'react';
import { getAllGames } from 'store/actions/Game Actions/game.action';

//game Actions

function PrimaryCard() {
    const [games, setGameData] = useState([]);
    // console.log('games 👎 ', games);

    const [dbRating, setDbRating] = useState(0);

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

    // useEffect(() => {
    //     if (Array.isArray(games?.rating) && games?.rating.length > 0) {
    //         const avgRating =
    //             games?.rating.map((gameDetail) => gameDetail.ratedValue).reduce((partialSum, a) => partialSum + a, 0) /
    //             games?.rating.length;
    //         // console.log(avgRating);
    //         if (Number.isInteger(avgRating)) {
    //             setDbRating(avgRating);
    //         } else {
    //             const onePlacedFloat = parseFloat(avgRating).toFixed(1);
    //             setDbRating(onePlacedFloat);
    //         }
    //     }
    // }, []);

    useEffect(() => {
        getAllGames().then((data) => {
            // console.log('categorties.. 👍 ', data);
            // console.log('get all games', data);
            setGameData(data);
        });
    }, []);
    const CardContent = styled(Typography)({
        fontFamily: 'poppins',
        fontSize: '32px',
        fontWeight: '600',
        justifyContent: 'space-between'
    });

    return (
        <Grid container spacing={2}>
            {games.map((game) => (
                <Grid item xs={12} sm={3} md={3} lg={2} xl={1.7} key={game._id}>
                    <Card className="primarycard">
                        <CategoryIcon className="categoryicon" />
                        <CardMedia className="media" component="img" image={game.imgUrl} alt="green iguana" />
                        <CardContent className="content">
                            <Typography
                                className="gameName"
                                gutterBottom
                                variant="h5"
                                component={'span'}
                                sx={{ fontSize: '12px', fontWeight: '600', fontFamily: 'poppins' }}
                            >
                                {game.name}
                            </Typography>

                            <Typography component={'span'}>
                                {getdbRating(game)}
                                <HiStar className="rating" size={'20px'} />
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default PrimaryCard;
