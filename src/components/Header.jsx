import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {
  return (
      <div
          className="header fixed top-0 w-full h-24 bg-gradient-to-r from-cyan-950 via-blue-950 to-indigo-950 shadow-md">
        <div className="flex w-1/3 justify-around h-full">
          <Link to={{pathname: "/"}} className="nav w-1/3 p-2 place-content-center text-center font-medium text-gray-300 bg-transparent cursor-pointer hover:bg-gray-500 transition-colors ease-in">
            <div>
              <span className="borde">Home</span>
            </div>
          </Link>
          <Link to="/docs" className="nav w-1/3 p-2 place-content-center text-center font-medium text-gray-300 bg-transparent cursor-pointer hover:bg-gray-500 transition-colors ease-in">
            <div>
              <span className="borde">Docs</span>
            </div>
          </Link>
          <Link to="/components" className="nav w-1/3 p-2 place-content-center text-center font-medium text-gray-300 bg-transparent cursor-pointer hover:bg-gray-500 transition-colors ease-in">
            <div>
              <span className="borde">Components</span>
            </div>
          </Link>
        </div>
      </div>
  );
}

export default Header;