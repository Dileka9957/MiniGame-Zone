import { IconButton, InputBase, Paper, OutlinedInput, TextField, InputAdornment, Hidden } from '@mui/material';
import { IconSearch } from '@tabler/icons';
import { useTheme } from '@mui/material/styles';
import Media from 'react-media';
import { styled } from '@mui/styles';
import { Box, color } from '@mui/system';
import { RiSearch2Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./index.scss";

function SearchSection({visibility}) {
    const theme = useTheme();
    const navigate = useNavigate();
    const [value, setValue] = useState('');

    var mystyle={};
    if(visibility){
        mystyle={
            visibility:'hidden',
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '10px',
            height: 34,
            bgcolor: '#E4DFFF',
            flexGrow: 2,
            width: '100%',
        }
    }else{
        mystyle={
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '10px',
            height: 34,
            bgcolor: '#E4DFFF',
            flexGrow: 2,
            width: '100%',
        }
    }
    
    
    //console.log('value', value);
    //console.log(visibility);
    const Box = styled('div')(({ theme }) => ({
        [theme.breakpoints.up('lg')]: {
            width: '1500px'
        },
        [theme.breakpoints.down('lg')]: {
            width: '700px'
        }
    }));

    // const handleClick = (event) => {
    //     // console.log('clicked');
    //     event.preventDefault();
    //     navigate(`/game/search?searchQuery=${value}`);
    // };

    return (
        <Paper
            component="form"
            sx={mystyle}
        >
            <InputBase
                className='inputBase'
                sx={{ ml: 1, flex: 1, bgcolor: '#E4DFFF' ,color:theme.palette.text.dark}}
                placeholder="Search Games"
                //inputProps={{ 'aria-label': 'search Games' }}
                
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={(ev) => {
                    // console.log(`Pressed keyCode ${ev.key}`);
                    if (ev.key === 'Enter') {
                      ev.preventDefault()
                      navigate(`/game/search?searchQuery=${value}`)
                      setValue('')
                    }
                  }}
            />
            <IconButton
                type="button"
                sx={{ p: '10px', '&:hover': { color: 'blue' } }}
                onClick={(event) => {
                    event.preventDefault()
                    navigate(`/game/search?searchQuery=${value}`)
                    setValue('')
                }}
            >
                <RiSearch2Line stroke={2.7} size="1.5rem" color={theme.palette.secondary.dark} />
            </IconButton>
        </Paper>
    );
}

export default SearchSection;
