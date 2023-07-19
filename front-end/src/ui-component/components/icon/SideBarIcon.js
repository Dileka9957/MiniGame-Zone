import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AnchorIcon from '@mui/icons-material/Anchor';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import ExtensionIcon from '@mui/icons-material/Extension';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import PixIcon from '@mui/icons-material/Pix';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import NatIcon from '@mui/icons-material/Nat';
import CasinoIcon from '@mui/icons-material/Casino';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import FlightClassIcon from '@mui/icons-material/FlightClass';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import SavingsIcon from '@mui/icons-material/Savings';
import MyLocationIcon from '@mui/icons-material/MyLocation';

function SideBarIcon(iconName) {
    switch (iconName) {
        case 'DirectionsCarIcon':
            return <DirectionsCarIcon />;
        case 'MonetizationOnIcon':
            return <MonetizationOnIcon />;
        case 'DirectionsRunIcon':
            return <DirectionsRunIcon />;
        case 'AnchorIcon':
            return <AnchorIcon />;
        case 'DirectionsCarFilledIcon':
            return <DirectionsCarFilledIcon />;
        case 'ExtensionIcon':
            return <ExtensionIcon />;
        case 'TableRestaurantIcon':
            return <TableRestaurantIcon />;
        case 'TwoWheelerIcon':
            return <TwoWheelerIcon />;
        case 'NatIcon':
            return <NatIcon />;
        case 'CasinoIcon':
            return <CasinoIcon />;
        case 'AccessibilityNewIcon':
            return <AccessibilityNewIcon />;
        case 'LocalLibraryIcon':
            return <LocalLibraryIcon />;
        case 'FlightClassIcon':
            return <FlightClassIcon />;
        case 'DownhillSkiingIcon':
            return <DownhillSkiingIcon />;
        case 'SportsKabaddiIcon':
            return <SportsKabaddiIcon />;
        case 'SavingsIcon':
            return <SavingsIcon />;
        case 'MyLocationIcon':
            return <MyLocationIcon />;

        default:
            return <CardMembershipIcon />;
            break;
    }
}

export default SideBarIcon;
