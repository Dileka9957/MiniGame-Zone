import { margin } from '@mui/system';
import React from 'react';
import Rank1 from './rank1.png';
function Rank1Avatar(props) {
    return (
        <div style={{position:'relative' ,alignItems:'center'}}>
            <img
                style={{
                    width: '70px',
                    border: '2px solid purple',
                    borderRadius: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 auto',
                    marginTop:'20px'
                }}
                src={props.avatar}
                alt="img"
            />
            <img className='rank1' 
                 style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height:'70px',
                    margin: '0 auto',
                    marginTop:'-25px'
                }} 
                 src={Rank1} 
                 alt="img"/>
        </div>
    );
}

export default Rank1Avatar;