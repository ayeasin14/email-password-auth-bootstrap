import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className=''>
            <h1 className='text-warning mx-auto w-50'>My Simple Authentication</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;