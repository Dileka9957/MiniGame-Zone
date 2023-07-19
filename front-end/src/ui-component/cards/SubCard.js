import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { display, styled } from '@mui/system';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

function BigCard() {
    const Card = styled(CardMedia)({
        borderRadius: '10px',
        img: {
            borderRadius: '10px'
        },
        CardContent: {
            justifyContent: 'space-between'
        }
    });

    const CardContent = styled(Typography)({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '10px'
    });

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card sx={{ minWidth: '240px' }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image="https://i.ytimg.com/vi/qlSrOTtIgZ8/maxresdefault.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography className="gameName" gutterBottom variant="h5" component="div">
                            Clash Of Clans
                        </Typography>

                        <Typography gutterBottom variant="h5" component="div">
                            4.5
                        </Typography>
                        <StarRoundedIcon />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default BigCard;
