import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

function Layout() {
  return (
    <>
      <div className="  min-h-screen flex mt-12 fixed left-0 right-0  justify-center  ">
        <Outlet />
      </div>

     
      <div className="fixed bottom-2 left-0 right-0 flex justify-center">
        <NavBar />
      </div>
    </>
  );
}

export default Layout;
