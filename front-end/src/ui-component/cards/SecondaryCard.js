import React from 'react';
import { Card, Grid, Typography ,Button} from '@mui/material';
import './SecondaryCard.scss';
import { display, styled } from '@mui/system';
import { HiStar } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import Modal from 'ui-component/Modal/Modal';
import CardMedia from '@mui/material/CardMedia';
import RightClickMenu from '../GameBoxes/RightClickMenu';

function SecondaryCard(gameDetails) {
//console.log("Game",gameDetails)
    const [open, setOpen] = React.useState(false);
    const [game, setGameDetails] = useState('');
    const [isMenuShown, setIsMenuShown] = useState(false);
    const [mousex,setmousex]=useState(0);
    const [mousey,setmousey]=useState(0);


    const CardContent = styled(Typography)({
        fontFamily: 'poppins',
        fontWeight: '600',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        padding: '10px 10px 0 10px '
    });

    const handleClick = () => {
        setOpen(true);
        const game = gameDetails;
        setGameDetails(game);
    };

      const rightclick=(evt)=>{
        evt.preventDefault();
        var x=evt.clientX;
        var y=evt.clientY;
        setmousex(x);
        setmousey(y);
        setIsMenuShown(true);
      }

    const handleDrag= () => {
 
    };

    return (
        <div className="secondary-card" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} draggable={true} onDrag={handleDrag}>
        
        <RightClickMenu  style={{zIndex:"1"}}
        isOpen={isMenuShown} 
        setIsOpen={setIsMenuShown}  
        x={mousex} 
        y={mousey} 
        gameDetails={gameDetails} 
        setOpen={setOpen} 
        setGameDetails={setGameDetails}/>
             
             {open && <Modal gameDetails={game} setOpen={setOpen} open={open} />}            
            <Button data-id={gameDetails._id} id="game_btn" onContextMenu={rightclick}  onClick={handleClick} >
                
            <Grid>
                <div className="card">
                <CardMedia className="media" component="img" image={gameDetails.imgUrl} alt="green iguana" />
                </div>
                <div>
                    <CardContent component={'div'}>
                        <Typography
                            className="gameName"
                            gutterBottom
                            variant="h5"
                            component={'div'}
                            sx={{ fontSize: '14px', fontWeight: '600', fontFamily: 'poppins' }}
                        >
                            {gameDetails?.name}

                        </Typography>

                        {/* <Typography gutterBottom variant="h5" component={'div'}>
                            {props.rating}
                            <HiStar className="rating" size={'24px'} />
                        </Typography> */}
                    </CardContent>
                </div>
            </Grid>
            </Button>
        </div>
    );
}

export default SecondaryCard;
