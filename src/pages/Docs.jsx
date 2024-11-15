import React from 'react';
import {Outlet} from "react-router-dom";

function Docs(props) {
  return (
      <>
        <div className="text-head text-9xl font-black bg-clip-text bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-200 text-transparent">Docs</div>
        <Outlet/>
      </>
  );
}

export default Docs;