import { Search } from '@mui/icons-material';
import { Button, Dialog } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import './MobileSearch.scss';
import MobileSearchBar from './MobileSearchBar';
import { FiSearch } from 'react-icons/fi';
import OutsideClickHandler from 'react-outside-click-handler';
import SearchBox from './Search';

function MobileSearch({ hidden, setHidden }) {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(true);

    const handleClick = () => {
        setOpen(true);
        setShow(false);
        setHidden(true);
        
    };
    return (
        <>
            {/* {open && <MobileSearchBar setOpen={setOpen} open={open} />} */}
            <OutsideClickHandler
                onOutsideClick={() => {
                    setOpen(false);
                    setHidden(false);
                }}
            >
                {!hidden && (
                    <div className="search-icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <FiSearch size={22} className="mobile-search-icon" onClick={handleClick} />
                    </div>
                )}
                {hidden && <SearchBox />}
            </OutsideClickHandler>
            {/* {show ? <FiSearch className="mobile-search-icon" onClose={() => setShow(true)} /> : null} */}

            {/* {show ? <Header /> : null} */}
            {/* {show ? <Header setShow={setShow} show={show} /> : null} */}
        </>
    );
}

export default MobileSearch;
