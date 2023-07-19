import React from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { DialogContentText } from '@mui/material';
import './Modal.scss';
// import GoogleLogin from 'react-google-login';
import { GoogleLogin } from '@react-oauth/google';
import {  useLocation, useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { loginAction } from 'store/actions/authentication/auth.action';
import { useEffect, useState} from 'react';



function ModalMobile({ setOpen, open, gameDetails,dbRating }) {
    
    const theme = useTheme();
    const user = JSON.parse(localStorage.getItem('profile'))
    //const [isGoogleSuccess, setIsGoogleSuccess] = useState(false)
    //console.log('user',user)
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    // useEffect( ()=>{
    //     if (isGoogleSuccess && user) navigate(`/game/${gameDetails?._id}`) 
    //   },[location])
    
    const googleSuccess = async (res) => {
        //setIsGoogleSuccess(true)
        const loginWithModal = true
        const gameId = gameDetails?._id
        dispatch(loginAction(res.credential,navigate, loginWithModal, gameId));  
    };

    const googleFailure = () => {
        alert('Google Sign In was unsuccessfull. Send from FE.');
    };

    return (
        <>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <CloseIcon className="mobile-close-icon" onClick={() => setOpen(false)} />

                <DialogContent
                    className="mobile-content"
                    sx={{
                        width: {
                            xs: '300px',
                            sm: '400px'
                        }
                    }}
                >
                    <div className="mobile-image-title-row">
                        <img className="mobile-modal-image" src={gameDetails?.imgUrl} alt="game" />

                        <DialogTitle className="mobile-Title">{gameDetails?.name}</DialogTitle>
                        <div className="mobile-rating">
                            <StarRoundedIcon className="mobile-star-icon" />
                            <DialogContent className="mobile-rating-text"sx={{ color:theme.palette.text.primary}}>{dbRating} Rating</DialogContent>
                        </div>
                        <DialogContentText className="mobile-description">{gameDetails?.description}</DialogContentText>
                    </div>
                    {user ? (
                                <a className='a' href={`/game/${gameDetails?._id}`} target="_blank" >
                                <Button className="mobile-play-button" variant="contained" color="primary" onClick={() => setOpen(false)}>
                                    Play
                                </Button>
                                </a>
                                ) : (
                                   
                                <GoogleLogin
                                    onSuccess={credentialResponse =>
                                        googleSuccess(credentialResponse)
                                    }
                                    onError={(Error) => {
                                        googleFailure(Error)
                                    }}
                                    useOneTap
                                    cancel_on_tap_outside
                                    size='medium'
                                    shape='pill'
                                    text='signin'
                                    theme='filled_blue'
                                    ux_mode='popup'
                                />
                            )
                    }
                </DialogContent>
            </Dialog>
        </>
    );
}

export default ModalMobile;
