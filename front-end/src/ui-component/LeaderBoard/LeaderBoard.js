import { Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';
import Rank1Avatar from './Rank1Avatar';
import React, { useState,useEffect } from 'react';


function LeaderBoard(points ,leaderboard) { 
const [topPoints,setTopPoints]=useState(points)

    return (
        <Box sx={{ backgroundColor: '#E4DFFF', borderRadius: '9px' ,position:'relative'}}>
            <Box
                sx={{
                    height: 40,
                    backgroundColor: '#4e1e60',
                    borderTopLeftRadius: 9,
                    borderTopRightRadius: 9,
                    textAlign: 'center',
                    marginTop:'-20px'

                }}
            >
                {/* <h5 style={{ color: '#FFFFFF' }}> Leaderboard</h5> */}
            </Box>         
                <Box
                            sx={{
                                height: 100,
                                // backgroundColor: '#4e1e60',
                                borderTopLeftRadius: 9,
                                borderTopRightRadius: 9,                             
                                marginTop: '-37px'
                            }}>
                    <Rank1Avatar avatar={topPoints.points.pointData[0].picture} />
                </Box>
              
                <Box
                            sx={{
                                height: 100,
                                borderTopLeftRadius: 9,
                                borderTopRightRadius: 9,                             
                                marginTop: '20px'
                            }}>
                 
                    <Typography textAlign={'center'} fontSize={20} color={'#4e1e60'}>
                        <b>{topPoints.points.pointData[0].name.substr(0, topPoints.points.pointData[0].name.indexOf(" "))}</b>
                    </Typography>
                           
                    <Typography textAlign={'center'} fontSize={20} color={'green'}>
                        <b>{topPoints.points.pointData[0].score}</b>
                    </Typography>
                </Box>

           
            {/* <img className='rank1' style={{height:'70px' ,position:'absolute'}} src={Rank1} alt=""/> */}
            <Box sx={{ position: 'relative', top: '-30px' }}>
                <Table>
                    <Box>
                        <Box display={'flex'} paddingTop={'0'} padding={'10px'} backgroundColor={'#4e1e60'} marginBottom={'20'}>
                            <Box width={'20%'}><Typography color={'white'}>Rank</Typography></Box>
                            <Box width={'30%'}><Typography color={'white'}>Profile</Typography></Box>
                            <Box width={'30%'}><Typography color={'white'}>Name</Typography></Box>
                            <Box width={'10%'}><Typography color={'white'}>Score</Typography></Box>
                        </Box>
                    </Box>
                    <Box>
                        {topPoints.points.pointData.slice(1, topPoints.points.pointData.length).map((row,index) => (
                            <Box bgcolor={'white'} key={index} margin={'10px'} display={'flex'} padding={'10px'} borderRadius={'20px'}>
                                <Box width={'20%'}><Typography fontWeight={'bold'} color={'#4e1e60'}>{index + 2}</Typography></Box>
                                <Box width={'30%'}>
                                    <img
                                        style={{ width: '35px', border: '2px solid purple', borderRadius: '50px' }}
                                        src={row.picture}
                                        alt="user"
                                    />
                                </Box>
                                <Box width={'30%'} ><Typography fontWeight={'bold'} color={'#4e1e60'}>{row.name.substr(0, row.name.indexOf(" "))}</Typography></Box>
                                <Box width={'20%'}><Typography fontWeight={'bold'} color={'green'}>{row.score}</Typography></Box>
                            </Box>
                        ))}
                    </Box>
                </Table>
            </Box>
        </Box>

    );
}
export default LeaderBoard;

<Box sx={{ backgroundColor: '#E4DFFF', borderRadius: '9px',  height: 480,}}>
<Box
    sx={{
        height: 65,
        backgroundColor: '#8626ff',
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
        textAlign: 'center',
        paddingTop: 2,
        marginTop: '-20px'
    }}
>
    {/* <h5 style={{ color: '#FFFFFF' }}> Leaderboard</h5> */}
</Box>

<Box sx={{ position: 'relative', top: '-40px' }}>
    <Table>
        <Box>
            <Box display={'flex'} paddingTop={'0'} padding={'10px'}>
                <Box width={'20%'}><Typography color={'black'}>Rank</Typography></Box>
                <Box width={'30%'}><Typography color={'black'}>Profile</Typography></Box>
                <Box width={'30%'}><Typography color={'black'}>Name</Typography></Box>
                <Box width={'10%'}><Typography color={'black'}>Score</Typography></Box>
            </Box>
        </Box>
        <Box>
        </Box>
    </Table>
</Box>
</Box>

