import DashBoardAnlytics from 'views/pages/DashBoardAnlytics';
import FourOhFour from 'views/utilities/404';

const UserDetails = () => {
    if (JSON.parse(localStorage.getItem('profile'))?.user?.isAdmin) {
        return (
            <div>
                <DashBoardAnlytics />
            </div>
        );
    } else return <FourOhFour />;
};

export default UserDetails;
