import React from 'react';

function MobileSearchBar(setOpen, open) {
    return (
        <div>
            <div className="search-bar" open={open} onClose={() => setOpen(false)}>
                <div className="search-icon"></div>
                <input className="search-input" type="text" placeholder="Search" />
            </div>
        </div>
    );
}

export default MobileSearchBar;
