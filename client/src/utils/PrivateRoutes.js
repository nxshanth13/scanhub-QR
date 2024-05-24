import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    return (
        isLoggedIn ? <Outlet /> : <Navigate to="/login" />
    );
}

export default PrivateRoutes;