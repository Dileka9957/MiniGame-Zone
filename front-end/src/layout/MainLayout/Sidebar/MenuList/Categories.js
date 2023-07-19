import React,{ useState ,useEffect} from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, Typography } from '@mui/material';
import { getAllcategories} from "store/actions/Game Actions/game.action";
import SideBarIcon from "../SideBarIcon";



function Categories(){
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllcategories().then((data) => {
           // console.log('categories.. 👍 ', data);
            setCategories(data);
        });
    }, []);


return(
    <Box flex={1} p={1} sx={{ display: { xs: 'none', sm: 'block' } }} className="list">
    <Box className="page-left">
        <List sx={{ fontFamily: 'poppins' }}>
        <ListItem disablePadding >
                    <ListItemButton component="a" href={`/game/categories?category=Rewarded`}>
                        <ListItemIcon>{SideBarIcon('Rewarded')}</ListItemIcon>
                        <ListItemText
                            primary={
                                <Typography sx={{ fontSize: '14px', fontWeight: 400, fontFamily: 'poppins' }}>
                                    Rewarded
                                </Typography>
                            }
                        />
                    </ListItemButton>
                </ListItem>
            {categories.map((category, key) => (
                <ListItem disablePadding key={category._id}>
                    <ListItemButton component="a" href={`/game/categories?category=${category.categoryName}`}>
                        <ListItemIcon>{SideBarIcon(category.icon)}</ListItemIcon>
                        <ListItemText
                            primary={
                                <Typography sx={{ fontSize: '14px', fontWeight: 400, fontFamily: 'poppins' }}>
                                    {category.categoryName}
                                </Typography>
                            }
                        />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Box>
</Box>
)

}
export default Categories