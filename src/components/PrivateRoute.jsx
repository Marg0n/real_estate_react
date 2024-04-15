import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user} = useAuth();
    const location = useLocation();
    // console.log(location)

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}/>
    }

    return (
        <div>
            {children}
        </div>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;