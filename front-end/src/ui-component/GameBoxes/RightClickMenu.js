import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const RightClickMenu = ({x,y,gameDetails,setOpen,setGameDetails,isOpen,setIsOpen})=>{

  const [notify, setnotify] = React.useState(false);

  var IsMenuOpen;

    function gotolink(mode){
        const user = JSON.parse(localStorage.getItem('profile'))
        if (user){
  
            window.open(`/game/${gameDetails?._id}`, mode);
          
          }
        else{
            setGameDetails(gameDetails);
            setOpen(true);
        }

    }

    function pushtoclip(){
      navigator.clipboard.writeText(window.location.host+`/game/${gameDetails?._id}`);
      setnotify(true);
    }

    function handleclick(){
      document.getElementById("root").removeEventListener('click', handleclick);
      setIsOpen(false);
    }

    function context(event){
      var id=event.target.closest("#game_btn").getAttribute("data-id");
      
      if(gameDetails._id !== id){
        document.getElementById("root").removeEventListener('contextmenu', (event)=> context(event));
        setIsOpen(false);
      }
    }

    if(isOpen){ 
      document.getElementById("root").addEventListener('contextmenu', (event)=> context(event));
      document.getElementById("root").addEventListener('click', handleclick);
    }else{
      document.getElementById("root").removeEventListener('click', handleclick);
      document.getElementById("root").removeEventListener('contextmenu', (event)=> context(event));
    }

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setnotify(false);
    }; 

 if(isOpen){IsMenuOpen=true;}else{IsMenuOpen=false;}

return(

  <> 
    <Snackbar open={notify} autoHideDuration={2500} onClose={handleClose} >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Game Link Successfully Copied to the ClipBoard !
        </Alert>
      </Snackbar>

    {(isOpen) && <Paper style={{zIndex:"1"}}  sx={{ width: 240, position:"fixed",top:`${y}px`,left:`${x}px`}}>
      
      
      
      <MenuList>
        <MenuItem onClick={()=>gotolink('_black')}>
          <ListItemIcon>
            <OpenInNewIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Play Game in new Tab</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘
          </Typography>
        </MenuItem>
        <MenuItem onClick={()=>gotolink('_self')}>
          <ListItemIcon>
            <SportsEsportsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Play Game</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘
          </Typography>
        </MenuItem>
        <MenuItem onClick={()=>pushtoclip()} >
          <ListItemIcon>
            <ContentPasteGoIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Copy Game Link</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘
          </Typography>
        </MenuItem>
        </MenuList>
    </Paper>
  }
  </>
)



}

export default RightClickMenu