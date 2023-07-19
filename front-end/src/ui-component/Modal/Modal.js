import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { DialogContentText } from '@mui/material';
import './Modal.scss';
import ModalMobile from './Modal.mobile';
import Media from 'react-media';
// import GoogleLogin from 'react-google-login';
import { GoogleLogin } from '@react-oauth/google';
import {  useLocation, useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { loginAction } from 'store/actions/authentication/auth.action';
import { useEffect ,useState} from 'react';


function Modal({ setOpen, open, gameDetails, dbRating}) {
    // console.log('game',gameDetails)
    const theme = useTheme();
    const user = JSON.parse(localStorage.getItem('profile'))
    // const [isGoogleSuccess, setIsGoogleSuccess] = useState(false)
    //console.log('user',user)
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    // useEffect( ()=>{
    //     if (isGoogleSuccess && user) navigate(`/game/${gameDetails?._id}`) 
    //   },[location])
      
    
    const googleSuccess = async (res) => {
        // setIsGoogleSuccess(true)
        const loginWithModal = true
        const gameId = gameDetails?._id
        dispatch(loginAction(res.credential,navigate, loginWithModal, gameId));   
    };

    const googleFailure = () => {
        alert('Google Sign In was unsuccessfull. Send from FE.');
    };


    return (
        <>
            <Media query="(max-width: 800px)">
                {(matches) => {
                    return matches ? (
                        <ModalMobile setOpen={setOpen} open={open} gameDetails={gameDetails} />
                    ) : (
                        <Dialog open={open} onClose={() => setOpen(false)} >
                            <CloseIcon className="close-icon" onClick={() => setOpen(false)} />

                            <DialogContent
                                className="Content"
                                sx={{
                                    width: {
                                        md: '600px'
                                    }
                                }}
                            >
                                <div className="image-title-row">
                                    <img className="modal-image" src={gameDetails?.imgUrl} alt="game" />

                                    <DialogContent className="content-text">
                                        <DialogTitle className="Title">{gameDetails?.name}</DialogTitle>
                                        <div className="rating">
                                            <StarRoundedIcon className="star-icon" />
                                            <DialogContent className="rating-text"sx={{ color:theme.palette.text.primary}}>{dbRating} Rating</DialogContent>
                                        </div>
                                        <DialogContentText className="description" sx={{ color:theme.palette.text.primary}}>{gameDetails?.description}</DialogContentText>
                                    </DialogContent>
                                </div>
                                {user ? (
                                <a className='a' href={`/game/${gameDetails?._id}`} target="_blank" >
                                <Button className="play-button" variant="contained" color="primary" onClick={() => setOpen(false)}>
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
              
                                )}
                            </DialogContent>
                        </Dialog>
                    );
                }}
            </Media>
        </>
    );
}


export default Modal;
