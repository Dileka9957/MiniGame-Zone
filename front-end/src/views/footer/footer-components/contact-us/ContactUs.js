import { Box, Card, Typography , TextField, Button, Stack} from '@mui/material';
import React, { useEffect } from 'react';
import Header from '../../../../layout/MainLayout/Header';
import MainCard from 'ui-component/cards/MainCard';
import { capitalizeFirstLetter } from 'utils/common';
import './ContactUs.css';
import Footer from 'views/footer';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { contactUsAction } from 'store/actions/user.action';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

function ContactUs () {


const user= JSON.parse(localStorage.getItem('profile'))
const emailAddress= user?.user?.email
const userId= user?.user?._id

const initialValues = { firstName: "",lastName: "", email: emailAddress, message: "" };
const [formValues, setFormValues] = useState(initialValues);
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);

const [notify, setnotify] = useState(false);
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    
 });

    const HideSearch=true

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

const handleClick = (e) => { 
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    //console.log('success')
     
}

useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      contactUsAction( userId ,formValues?.firstName, formValues?.lastName, emailAddress, formValues?.message ) 
      setnotify(true)  
    }
  }, [formErrors]);


  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setnotify(false);
  }; 
  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "First Name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required!";
    }
    if (!values.message) {
      errors.message = "Message is required!";
    }
    return errors;
  };

    return (
        <>
            <Snackbar open={notify}  autoHideDuration={2500} onClose={handleClose}>        
                <Alert severity="success" onClose={handleClose} sx={{ width: '100%' }}>
                        Message Successfully sent !
                </Alert>
            </Snackbar>

            <div style={{padding:"12px"}}><Header option1={HideSearch} /></div>
            <Card sx={{ marginBottom: '10px', textAlign:'center' }}>
                <Typography variant="h1" ml={0} pt={1} pb={1} >Contact Us</Typography>
            </Card>

            <Box sx={{ height: "90%",  display: 'flex',  flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', alignItems:'center' }} >
                <Box padding={2} sx={{ width:'500px', boxSizing:'unset',marginTop:'20px'}} >

                <Stack direction="row" justifyContent="space-between" >

                <Box sx={{width:'50%'}}>
                    <TextField 
                   sx={{width:'97%',marginLeft:'5px'}}
                    type="text"
                    name="firstName" 
                    placeholder="First Name"
                    value={formValues.firstName}
                    onChange={handleChange}

                    />
                    <p style={{margin:15 ,color:'red'}}>{formErrors.firstName}</p>
                </Box>
                <Box sx={{width:'50%'}}>
                    <TextField
                 sx={{width:'97%',marginLeft:'10px'}}    
                    type="text"
                    name="lastName" 
                    placeholder="Last Name"
                    value={formValues.lastName}
                    onChange={handleChange}

                    />
                     <p style={{margin:15 ,marginLeft:20,color:'red'}}>{formErrors.lastName}</p> 
                </Box>

                     </Stack>

                    <TextField
                    fullWidth 
                    sx={{margin:'5px' }} 
                    type="text"
                    name="email" 
                    placeholder="Email"
                    value={emailAddress}
                    //onChange={e => setEmailAddress( email)}  
                    />

                    <TextField
                    sx={{margin:'5px' }}
                    name="message" 
                    placeholder="Message"
                    value={formValues.message}
                    multiline
                    rows={4}
                    fullWidth
                    onChange={handleChange} 
                    />
                    
                    <p style={{margin:15 ,color:'red'}}>{formErrors.message}</p>

                    <Button 
                    sx={{margin:'5px'}} 
                    variant="contained" 
                    endIcon={<SendIcon />}
                     onClick={handleClick}
                    >
                    Submit
                    </Button>


                </Box>
                <Box sx={{width:'100%',position:'fixed',bottom:'1000px'}}>
                <Footer />
                </Box>


            </Box>
            <Box sx={{width:'100%',position:'fixed',bottom:'0px'}}>
                <Footer />
            </Box>
        </>
    )
}

export default ContactUs
