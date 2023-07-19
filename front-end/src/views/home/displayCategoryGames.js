import React from "react";
import { Grid ,Box } from "@mui/material";
import { useState ,useEffect} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getGamesByCategory, getRewardGames } from "store/actions/Game Actions/game.action";
import GameBox from "ui-component/GameBoxes/gameBox";
import SkeletonCard from 'ui-component/skeleton/SkeletonCard';

function DisplayCategoryGames(){
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let category = params.get('category');


    const [categorygames, setCategoryGames] = useState([]);
    const [skip, setSkip] = useState(0);
    const [total, setTotal] = (useState(12));

  //load first 12 of games
    useEffect(()=>{

        getGamesByCategory(category,skip).then((data) => {
       // console.log(data.records)    
            setCategoryGames([...categorygames, ...data.records]);
            setSkip(skip + data.records.length)
            setTotal(data.total)
    
      })
    //}
    },[])

    //load next games
    const fetchMoreGames = async () => {
  
        getGamesByCategory(category,skip).then((data) => {
        //console.log(data)
        setTimeout(() => {
            setCategoryGames([...categorygames, ...data.records]);
            setSkip(skip + data.records.length)
            setTotal(data.total)
    
        }, 1000);
      })
    
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
                <div><b>Search Results for : {category}</b></div>
                {total} Results
             </div>
        </Grid>
         <InfiniteScroll
            dataLength={categorygames?.length}
            next={fetchMoreGames}
            hasMore={skip<total}
            loader={<SkeletonCard/>}
            endMessage={<></>}
              >
              <Box>
                <Grid container>
				          {categorygames?.map((game) => (
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

export default DisplayCategoryGames