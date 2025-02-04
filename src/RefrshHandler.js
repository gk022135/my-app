import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function RefrshHandler({ setIsAuthenticated }) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsAuthenticated(true);
            if (location.pathname === '/home' ||
                location.pathname === '/login' ||
                location.pathname === '/signup'
            ) {
                navigate('/', { replace: false });
            }
        }
        // if(localStorage.getItem('AdminName')){
        //     setIsAuthenticated(true);
        //     if (location.pathname === '/home' ||
        //         location.pathname === '/login' ||
        //         location.pathname == '/adminlogin'||
        //         location.pathname == '/adminsignup'
        //     ) {
        //         navigate('/admindashboard', { replace: false });
        //     }

        // }
    }, [location, navigate, setIsAuthenticated])

    return (
        null
    )
}

export default RefrshHandler