import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();
    const activeclassName = 'bg-blue-600';

    const NavLinkFunction = () => {
        const sideBarArray = new Map([
          ['Dashboard', '/dashboard'],
          ['Admin', '/admin'],
          ['Students', '/students'],
        ]);
        
        return (
          <ul>
            {[...sideBarArray].map(([key, value]) => (
              <NavLink exact="true" to={value}>
                <div key={value} className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white ${location.pathname === value ? activeclassName : ''}`} >
                  <span className="text-[15px] ml-4 text-gray-200 font-bold">{key}</span>
                </div>
              </NavLink>
            ))}
          </ul>
        );
     }

    const openSidebar = () => {
      document.querySelector(".sidebar").classList.toggle("hidden");
    };

     
    return (
      <aside className="bg-gray-200 w-64 px-4 py-8 flex z-10">
        <span className="absolute text-white text-4xl top-5 left-4 cursor-pointer mt-[50px]" onClick={openSidebar}>
          <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
        </span>
        <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[220px] overflow-y-auto text-center bg-gray-800">
          <div className="text-gray-100 text-xl mt-[50px]">
            <div className="p-2.5 flex items-center ">
              <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
              <h1 className="font-bold text-gray-200 text-[15px] ml-3">Sidebar</h1>
              <i className="bi bi-x cursor-pointer ml-[70px] lg:hidden" onClick={openSidebar}></i>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>
          </div>

          {NavLinkFunction()}

          <div className="my-4 bg-gray-600 h-[1px]"></div>
        </div>
        
      </aside>
    );
  }
  
export default Sidebar