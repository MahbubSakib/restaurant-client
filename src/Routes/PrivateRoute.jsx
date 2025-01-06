import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loader from '../components/Loader';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loader></Loader>
    }

    if (!user) {
        return <Navigate state={location.pathname} to="/login" replace />;
    }

    return children;
};

export default PrivateRoute;