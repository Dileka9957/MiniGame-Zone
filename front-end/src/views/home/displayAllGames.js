import React from "react";
import { Grid ,Box } from "@mui/material";
import { useState ,useEffect} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getAllGames } from "store/actions/Game Actions/game.action";
import GameBox from "ui-component/GameBoxes/gameBox";
import CarouselSlider from 'ui-component/carousel/Carousel';
import SkeletonCard from 'ui-component/skeleton/SkeletonCard';

 

function DisplayAllGames(){

    const [games, setGames] = useState([]);
    const [skip, setSkip] = useState(0);
    const [total, setTotal] = (useState(12));
    //const [isLoading, setIsLoading] = useState(false);

  //load first 12 of games
    useEffect(()=>{
      //setIsLoading(true);
        getAllGames(skip).then((data) => {       
                setGames([...games, ...data.records]);
                setSkip(skip + data.records.length)
                setTotal(data.total)
                //setIsLoading(false);
        
     
        });
    
    },[])

    //load next games
    const fetchMoreGames =async() => {
      getAllGames(skip).then((data) => {
        //console.log(data)
      //  setTimeout(() => {
            setGames([...games, ...data.records]);
            setSkip(skip + data.records.length)
            setTotal(data.total)
           
        // }, 1000);
      })
	};


return(
      <div>
        <CarouselSlider />
        

         <InfiniteScroll
            dataLength={games?.length}
            next={fetchMoreGames}
            hasMore={skip<total}
            loader={<SkeletonCard />}
            endMessage={<></>}
              >
              <Box>
                <Grid container>
				          {games?.map((game) => (
					            <Grid key={game?._id} item xs={4} sm={3} md={3} lg={2} sx={{ display:'flex', justifyContent:'center' }}>
                        <GameBox gameDetails={game} />
                      </Grid>
				          ))}
                </Grid>
              </Box>
         </InfiniteScroll>

         
      </div>
    )
}

export default DisplayAllGames
