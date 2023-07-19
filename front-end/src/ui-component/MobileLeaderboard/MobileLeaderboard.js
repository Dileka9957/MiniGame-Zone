import { Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';
import React, { useState } from 'react';
import Rank1Avatar from 'ui-component/LeaderBoard/Rank1Avatar';

function MobileLeaderBoard(points) {
const [topPoints,setTopPoints]=useState(points)

    return (
        <Box sx={{ backgroundColor: '#E4DFFF' }}>
            <Box
                sx={{
                    height: 60,
                    backgroundColor: '#4e1e60',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
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

            <Box sx={{ position: 'relative', mb: '20px', pb: '20px' }}>
                <Table>
                    <Box>
                        <Box sx={{ marginTop: '-30px' ,backgroundColor:'#4e1e60', padding:'10px', paddingTop:'0', display:'flex'}}>
                            <Box width={'20%'}><Typography color={'white'}>Rank</Typography></Box>
                            <Box width={'25%'}><Typography color={'white'}>Profile</Typography></Box>
                            <Box width={'40%'}><Typography color={'white'}>Name</Typography></Box>
                            <Box width={'10%'}><Typography color={'white'}>Score</Typography></Box>
                        </Box>
                    </Box>
                    <Box>
                        {topPoints.points.pointData.slice(1, topPoints.points.pointData.length).map((row,index) => (
                            <Box bgcolor={'white'} key={index} margin={'10px'} display={'flex'} padding={'5px'} borderRadius={'10px'}>
                                <Box width={'20%'} ><Typography fontWeight={'bold'} color={'#4e1e60'}>{index + 2}</Typography></Box>
                                <Box width={'25%'}>
                                    <img
                                        style={{ width: '30px', border: '2px solid purple', borderRadius: '50px' }}
                                        src={row.picture}
                                        alt="user"
                                    />
                                </Box>
                                <Box width={'45%'}><Typography fontWeight={'bold'} color={'black'}>{row.name.substr(0, row.name.indexOf(" "))}</Typography></Box>
                                <Box width={'10%'}><Typography fontWeight={'bold'} color={'green'}>{row.score}</Typography></Box>
                            </Box>
                        ))}
                    </Box>
                </Table>
            </Box>
            {/* </div> */}
        </Box>
    );
}
export default MobileLeaderBoard;

// const posts = [
//     {
//         id: 1,
//         name: 'Jennie',
//         Score: '100',
//         rank: '#1',
//         picture: 'https://randomuser.me/api/portraits/women/63.jpg'
//     },
//     {
//         id: 2,
//         name: 'Mark',
//         Score: '100',
//         rank: '#1',
//         picture: 'https://randomuser.me/api/portraits/men/62.jpg'
//     },
//     {
//         id: 3,
//         name: 'Jennie',
//         Score: '100',
//         rank: '#1',
//         picture: 'https://randomuser.me/api/portraits/women/71.jpg'
//     },
//     {
//         id: 4,
//         name: 'Clere',
//         Score: '100',
//         rank: '#1',
//         picture: 'https://randomuser.me/api/portraits/men/47.jpg'
//     },
//     {
//         id: 5,
//         name: 'Jhone',
//         Score: '100',
//         rank: '#1',
//         picture: 'https://randomuser.me/api/portraits/men/62.jpg'
//     },
//     {
//         id: 6,
//         name: 'Jennie',
//         Score: '100',
//         rank: '#1',
//         picture: 'https://randomuser.me/api/portraits/men/85.jpg'
//     },
//     {
//         id: 7,
//         name: 'Jennie',
//         Score: '100',
//         rank: '#1',
//         picture: 'https://randomuser.me/api/portraits/men/14.jpg'
//     },
//     {
//         id: 8,
//         name: 'Jennie',
//         Score: '100',
//         rank: '#1',
//         picture: 'https://randomuser.me/api/portraits/men/18.jpg'
//     },
//     {
//         id: 9,
//         name: 'Jennie',
//         Score: '100',
//         rank: '#1',
//         picture: 'https://randomuser.me/api/portraits/women/17.jpg'
//     },
//     {
//         id: 10,
//         name: 'Jennie',
//         Score: '100',
//         rank: '#1',
//         picture: 'https://randomuser.me/api/portraits/women/94.jpg'
//     }
// ];
