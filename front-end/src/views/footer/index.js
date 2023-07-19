import { useTheme } from '@emotion/react';
import { Card, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import config from 'config';
import React from 'react'
import FLeft from './footer-left.png';
import FRight from './footer-right.png';
import { useLocation } from 'react-router-dom'

import { capitalizeFirstLetter } from 'utils/common';

import './footer.scss'; 

const Footer = () => {

    const theme = useTheme();
   
const CurrentPageHighlight=()=>{
    const location = useLocation();
    const path=location.pathname;
    alert(path);
    document.getElementById("1").style.background = "red";
}

const SetClass=(p)=>{
    const location = useLocation();
    const path=location.pathname;
    if (path===p){return "active"}
    return ""
}

  return (
    <Card sx={{
        height: '100px', width: '100%',
        border: '1px solid',
        borderColor: theme.palette.primary.light,
        ':hover': {
            boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
        },
        display: 'flex',
        alignItems:'center',
        justifyContent:'space-between'
    }} 
    className="footer"
    >
        <img className='fimagel' src={FLeft} alt=""/> 
        <div style={{display: 'flex',
        flexDirection: 'column',
        alignItems:'center'}} >

    
        
        <Box sx={{ display: 'flex', alignItems: 'center', padding: '15px', }} className="footer-pages">
            <Link  underline="none" id="1" href="/about-us" target="_blank"  sx={{ marginRight: '15px', cursor: 'pointer', }}  className={`footer-typography ${SetClass("/about-us")}`} >
                About Us
            </Link >

            <Link  underline="none" id="2"  href="/contact-us" target="_blank" sx={{ marginRight: '15px', cursor: 'pointer', }} className={`footer-typography ${SetClass("/contact-us")}`} >
                Contact Us
            </Link>

            <Link  underline="none" id="3"  href="/terms-and-conditions" target="_blank" sx={{ marginRight: '15px', cursor: 'pointer', }} className={`footer-typography ${SetClass("/terms-and-conditions")}`} >
                Terms & Conditions
            </Link>

            <Link  underline="none" id="4"  href="/privacy-policy" target="_blank" sx={{ marginRight: '15px', cursor: 'pointer', }} className={`footer-typography ${SetClass("/privacy-policy")}`} >
                Privacy Policy
            </Link>
            
            {/* <Link  underline="none"  href="/DMCA" target="_blank" sx={{ marginRight: '15px', cursor: 'pointer', }} className="footer-typography" >
                DMCA
            </Link>
            <Link  underline="none"  href="/suggetion-bugs" target="_blank" sx={{ marginRight: '15px', cursor: 'pointer', }} className="footer-typography" >
                Suggestions
            </Link> */}
        </Box>

        <Box className="copyright">
            <Typography sx={{paddingBottom:'10px'}}>
                © {new Date().getFullYear()} <a style={{fontWeight:'bold'}} href='https://www.itexphere.com/' target="_Blank"> iTexphere</a> {capitalizeFirstLetter(` - All Rights Reserved`)} 
            </Typography>
        </Box>

        </div>
        <img className='fimager' src={FRight} alt=""/>  
        
    </Card>
  )
}

export default Footer