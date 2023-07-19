import React from 'react';
import './SideBar.scss';
import Categories from './MenuList/Categories';

const Sidebar = () => {
 
    return (
        <div className="scrollbar">
            <Categories/>
        </div>
    );
};

export default Sidebar;
