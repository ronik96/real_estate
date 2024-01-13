import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRouter() {
    const {currentUser} = useSelector((state) => state.user);

    return currentUser ? <Outlet></Outlet> : <Navigate to={'/signin'}></Navigate> 
}
