import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const PrivetRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();


    if (isLoading) { return <CircularProgress /> }


    if (user.email) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} />


}


export default PrivetRoute;