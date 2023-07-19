import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function ScreenSkeleton() {
    return (
        <Box>
            {/* <Skeleton variant="rectangular" maxwidth={1200} height={500} className="screen-skeleton" /> */}
            <Skeleton varient="text" width={200} height={50} />
            <Skeleton varient="text" maxwidth={1200} height={30} />
        </Box>
    );
}

export default ScreenSkeleton;
