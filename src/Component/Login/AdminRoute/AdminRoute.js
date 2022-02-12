import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import useAuth from '../../../hook/useAuth'

const AdminRoute = ({children}) => {
    const {user , isLoading, admin} = useAuth() 
    console.log(admin)
    const location = useLocation();
    // const isLoading = false
    // const admin = false
    
    
    if(isLoading){
        return <h2>Loading</h2>
    }
    return  admin ? children : <Navigate to="/" state={{from: location}} />
};

export default AdminRoute;