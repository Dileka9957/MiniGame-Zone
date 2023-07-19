import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function AnlyticsCard(props) {
    return (
        <Card
            sx={{
                backgroundColor: '#90caf9',
                direction: { xs: 'column' },
                // width: { xs: 150, sm: 200, md: 250, lg: 200, xl: 200 },
                // width: 400,
                minWidth: 300
                // height: 380
            }}
        >
            <CardContent>
                <Typography component={'span'} sx={{ fontSize: 16, textAlign: 'center' }} color="#ffffff">
                    <h1>{props.heading}</h1>
                </Typography>

                <Typography component={'span'} sx={{ textAlign: 'center' }} color="#ffffff">
                    <h3>{props.subHeading}</h3>
                </Typography>
                <Typography
                    component={'span'}
                    variant="body2"
                    style={{ textAlign: 'center', fontSize: '24px', fontWeight: 600, color: '#2196f3 ' }}
                >
                    <h1>{props.count}</h1>
                </Typography>

                <Button sx={{ fontSize: 14, display: 'flex', justifyContent: 'center', marginTop: 10 }} href={props.linkHref} size="small">
                    <h4>{props.link}</h4>
                </Button>
            </CardContent>
        </Card>
    );
}

export default AnlyticsCard;
