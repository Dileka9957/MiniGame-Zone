import React from "react";
import { Grid ,Box } from "@mui/material";
import { useState ,useEffect} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getGamesBySearch } from "store/actions/Game Actions/game.action";
import GameBox from "ui-component/GameBoxes/gameBox";
import SkeletonCard from 'ui-component/skeleton/SkeletonCard';
 

function DisplaySearchGames(){
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let searchQuery = params.get('searchQuery');

    const [searchGames, setSearchGames] = useState([]);
    const [skip, setSkip] = useState(0);
    const [total, setTotal] = (useState(12));

    //load first 12 of games
    useEffect(()=>{
            getGamesBySearch(searchQuery,skip).then((data) => {

                    setSearchGames([...searchGames, ...data.records]);
                    setSkip(skip + data.records.length)
                    setTotal(data.total)

            });
        
    },[])


    //load next games
    const fetchMoreGames = async () => {
        getGamesBySearch(searchQuery,skip).then((data) => {

           setTimeout(() => {
                setSearchGames([...searchGames, ...data.records]);
                setSkip(skip + data.records.length)
                setTotal(data.total)
        
           }, 1000);
        });
	};


return(
      <div>
        <Grid sx={{ display: 'flex', flexDirection: 'row', color: '#383838', mb: '40px' }}>
            <div
                style={{
                   textAlign: 'left',
                    paddingLeft: '10px',
                    fontFamily: 'poppins',
                    fontWeight: '400',
                    fontSize: 14,
                    color: '#383838',
                    backgroundColor: '#F2F2F2',
                    padding: '5px 20px',
                    borderRadius: '10px'
                }}
                >
                <div><b>Search Results for : {searchQuery}</b></div>
                {total} Results
             </div>
        </Grid>
         <InfiniteScroll
            dataLength={searchGames?.length}
            next={fetchMoreGames}
            hasMore={skip<total}
            loader={<SkeletonCard />}
            endMessage={<></>}
              >
              <Box>
                <Grid container>
				          {searchGames?.map((game) => (
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

export default DisplaySearchGames
