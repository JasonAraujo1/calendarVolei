import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchBar from '../../../components/SearchBar/SearchBar';

function LayoutMaps() {
  return (
    <>
      <div className="  min-h-screen flex fixed left-0 right-0  justify-center  ">
        <Outlet />
      </div>

     
      
      <div className=" rounded-2xl fixed mt-10 left-0 right-0 m-11 ">
				<SearchBar className="shadow-[0 1px 6px rgb(32 33 36 / 28%);] " />
			</div>
     
    </>
  );
}

export default LayoutMaps;
