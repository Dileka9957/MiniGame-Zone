import { Avatar, Button, Divider, Grid, InputBase, OutlinedInput, TextField, Typography } from '@mui/material';
import { Box, fontSize } from '@mui/system';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { useState, useEffect  } from 'react';
import { getCommentAction, getGameDataAction } from 'store/actions/Game Actions/game.action';
import GenericInput from 'ui-component/components/input/genericInput';
import './Comment.scss';

import SendIcon from '@mui/icons-material/Send';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Oval} from 'react-loader-spinner'
import { postCommentAction } from 'store/actions/Game Actions/postGame.action';


function Comment() {
    const theme = useTheme();
    const [comments, setComments] = useState([]);
    const [gameId, setGameId] = useState('');
    const  user  = JSON.parse(localStorage.getItem('profile'));
    //console.log('user',user)
    //const [total,setTotal] = useState();
    const ariaLabel = { 'aria-label': 'description' };
    const [comment, setComment] = useState('');
    const [skip, setSkip] = useState(0);
    const [total, setTotal] = (useState());


      //load first 12 of comments
    useEffect(() => {
        const URL_path = window.location.pathname;
        const gameId = URL_path.substring(URL_path.length - 24);
        setGameId(gameId);

        // getGameDataAction(gameId).then((data) => {
        //     console.log('game data comments ', data.comments);
        //     setComments(data.comments);
        // });

            getCommentAction(gameId,skip).then((data) =>{
                
                    setComments([...comments,...data.records])
                    setSkip(skip + data.records.length)
                    setTotal(data.total);
                
            })

    }, []);


    const fetchMoreComments =  () => {
        getCommentAction(gameId,skip).then((data) => {
          //console.log(data)
         // setTimeout(() => {
              setComments([...comments, ...data.records]);
              setSkip(skip + data.records.length)
              setTotal(data.total)
           
          //}, 1500);
        })
      };

    const handleChange = (e) => {
        setComment(e.target.value);
            
    };

    const sendComment = () => {
        var today = new Date();   
        postCommentAction(user._id, gameId, comment, user?.user?.picture, user?.user?.name,today );

       const newComment = {
            gameId: gameId,
            comment: comment,
            picture: user?.user?.picture,
            name: user?.user?.name,
            createdDate:today
        }
        // console.log('newComment',newComment)
        setComments([...comments,newComment])
    };

    const TimeAgo = (commentData) => {
        
        let CreatedDate = new Date(commentData.createdDate)
        //console.log('created date -',CreatedDate)
        let today = new Date()
        //console.log('today -',today)
    
    var seconds = Math.floor((today - CreatedDate) / 1000);

        var interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + " years ago";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months ago";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days ago";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours ago";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";

}
    return (
        <Grid flexGrow={1}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} className="comment-toolbar">
                    <Typography className="comment-heading">Comments</Typography>
                    <Typography>{total} Comments</Typography>
                </Grid>
                <Divider sx={{ marginTop: '10px', width: '100%', mb: '60px' }} />
            </Grid>
            <Grid flexGrow={1}>
                <Box
                    mb={3}
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Avatar alt="Remy Sharp" src={user?.picture} />
                    
                    <TextField
                    id="standard-basic"
                    placeholder='Add a comment...' 
                    color="secondary"
                     inputProps={ariaLabel}
                    
                    variant="standard" 
                    onChange={handleChange}
                    value={comment}
                    style={{ width: '85%',marginLeft:'40px' }}
                    // inputProps={{}}
                    onKeyPress={(ev) => {
                        //  console.log(`Pressed keyCode ${ev.key}`);
                        if (ev.key === 'Enter') { 
                        ev.preventDefault();
                          sendComment()                                  
                        }
                      }}
                    />
                    

                    <Button className="comment-button" backgroundColor='primary' 
                     onClick={(event) => 
                      {
                        event.preventDefault();
                        sendComment()
                        setComment('')
                        }}>
                        <Typography sx={{color:'white'}}><SendIcon color='secondary' /></Typography>
                    </Button>
                </Box>
                {/* {comments.slice(0).reverse().map((commentData, index) => ( */}
            <div style={{ overflow: 'hidden' }}>
            <InfiniteScroll
            dataLength={comments?.length}
            next={fetchMoreComments}
            hasMore={skip<total}
            loader={<Oval  height={45} width={45} strokeWidth={5} color="#4fa94d"/>}
            endMessage={<></>}
            >
                <Box>
  
                {comments.map((commentData, index) => (
                    <Box key={index} mb={3} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box ><Avatar src={commentData.picture} alt="Remy Sharp" /></Box>
                        
                        <Box className="comment-text" >
                            <Box display={"flex"} gap={"20px"}>
                                <Typography variant="subtitle1" gutterBottom component="div"sx={{color:theme.palette.text.primary, fontSize:'14px' , fontWeight:'550'}}>
                                    {commentData.name}  
                                </Typography>
                                
                                <Typography variant="subtitle1" gutterBottom component="div"sx={{color:'gray', fontSize:'13px' , fontWeight:'100'}}>
                                    {commentData?.createdDate? (TimeAgo(commentData)):(null)}
                                </Typography>
                            </Box>
           
                            <Typography variant="body2" gutterBottom component="div" sx={{color:theme.palette.text.primary, fontSize:'14px' , fontWeight:'500'}}>
                                {commentData.comment}
                            </Typography>
                        </Box>
                    </Box>
                ))}

                </Box>
            </InfiniteScroll>
            </div>
            </Grid>
        </Grid>
    );
}

export default Comment;