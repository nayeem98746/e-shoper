import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';

const PrivateRoute = ({children}) => {
    const { user,isLoading } = useAuth();
    if(isLoading){
        return <h2>Loading</h2>
    }
    return user ? children : <Navigate to="/login"/>
};

export default PrivateRoute;