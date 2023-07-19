import React from "react";
import { Button } from "@mui/material";
import GoogleLogin from 'react-google-login';
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from 'store/actions/authentication/auth.action';


function ModalButton( {gameDetails}){
    console.log('game',gameDetails?.name)
    
    const navigate = useNavigate();
    const dispatch = useDispatch();



    const googleSuccess = async (res) => {
        dispatch(loginAction(res.tokenId, navigate));
    };

    const googleFailure = () => {
        alert('Google Sign In was unsuccessfull. Send from FE.');
        // console.log('Google Sign In was unsuccessfull. Send from FE. Try  Again Later ');
    };
return(
            <GoogleLogin
                clientId="988836340451-pqpi4evnl7qut2h2b647p5rttkjrqbg0.apps.googleusercontent.com"
                render={(renderProps) => (
                    <Button
                        className="play-button" 
                        variant="contained" 
                        color="primary"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                    >
                        {/* <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                                <img src={Google} alt="google" width={16} height={20} style={{ marginRight: matchDownSM ? 8 : 16, paddingTop: 5 }} />
                            </Box> */}
                        Sign In and Play
                    </Button>
                )}
               // buttonText="Login"
                onSuccess={googleSuccess}
                onFailure={googleFailure}
            />
        )       

}

export default ModalButton