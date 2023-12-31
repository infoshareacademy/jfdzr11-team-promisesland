import { Outlet, Navigate, useLocation } from 'react-router-dom';
import useAuth from '../contexts/AuthContext';

const PrivateRoute = () => {
	const location = useLocation();
	const { currentUser } = useAuth();
	return (
		<>{currentUser ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />}</>
	);
};

export default PrivateRoute;
