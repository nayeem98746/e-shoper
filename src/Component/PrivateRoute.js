import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import useAuth from '../Hook/useAuth';

const PrivateRoute = ({children}) => {
    const { user,isLoading } = useAuth();
    const location = useLocation();
    
    if(isLoading){
        return <h2>Loading</h2>
    }
    return user ? children : <Navigate to="/login" state={{from: location}} />
};

export default PrivateRoute;