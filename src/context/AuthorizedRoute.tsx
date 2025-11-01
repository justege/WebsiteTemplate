import React, {Suspense} from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface AuthorizedRouteProps {
    children: React.ReactNode;
    isAuthorized: boolean;
}

const AuthorizedRoute: React.FC<AuthorizedRouteProps> = ({ children, isAuthorized }) => {
    
    const location = useLocation(); // Corrected the typo here

    return (
        // Use parentheses to implicitly return the JSX
        <>
            {isAuthorized ? children : <Navigate to='/' state={{ from: location }} />}
        </>
    );
};

export default AuthorizedRoute;
