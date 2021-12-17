import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const AdminRoute = ({ children }) => {

    const { user, isLoading, admin } = useAuth();
    const location = useLocation();


    if (isLoading) { return <CircularProgress /> }


    if (user.email && admin) {
        return children
    }

    return <Navigate to="/" state={{ from: location }} />

};

export default AdminRoute;