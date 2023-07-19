import React from 'react';
import CarouselCard from './Carousel.category.card';
import './Carousel.category.scss';
import { motion } from 'framer-motion';
import { useState,  useEffect , useRef  } from 'react';
import { getAllcategories } from 'store/actions/Game Actions/game.action';
import Carousel from 'react-elastic-carousel';
import { ListItem, ListItemButton } from '@mui/material';

function CarouselCategory() {
    // const [width, setWidth] = useState(0);
    // const carousel = useRef();
    const [categories, setCategories] = useState([]);

    // useEffect(() => {
    //     console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    //     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    // }, []);

    //get all categories =======================================================
    useEffect(() => {
        getAllcategories().then((data) => {
            // console.log('categorties.. 👍 ', data);
            setCategories(data);
        });
    }, []);

    const breakPoints = [
        { width: 200, itemsToShow: 2 },
        { width: 300, itemsToShow: 2 },
        { width: 320, itemsToShow: 2.3 },
        { width: 350, itemsToShow: 2.4 },
        { width: 360, itemsToShow: 2.4 },
        { width: 380, itemsToShow: 2.7 },
        { width: 450, itemsToShow: 3 },
        { width: 500, itemsToShow: 3.3 },
        { width: 550, itemsToShow: 3.5 },
        { width: 600, itemsToShow: 4 },
        { width: 650, itemsToShow: 4.2 },
        { width: 700, itemsToShow: 4.7 },
        { width: 750, itemsToShow: 5 }
    ];

    const reward={categoryName: "Rewarded",icon:"Rewarded"}

    return (
        <div className="carousel-category">
            <Carousel breakPoints={breakPoints} showArrows={false}>
                        <ListItem disablePadding={true} component="a" href={`/game/categories?category=Rewarded`}>
                            <CarouselCard key="001" categoryDetails={reward} />
                        </ListItem>
                {categories.map((category, key) => {
                    return (
                        <ListItem key={key} disablePadding={true} component="a" href={`/game/categories?category=${category.categoryName}`}>
                            <CarouselCard  categoryDetails={category} />
                        </ListItem>
                    );
                })}
            </Carousel>
        </div>
    );
}

export default CarouselCategory;
