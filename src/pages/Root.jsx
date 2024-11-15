import Header from "../components/Header.jsx";
import {Outlet} from "react-router-dom";

function Root() {

  return (
      <div className="pt-24">
        <Header/>
        <div className="p-4">
          <Outlet/>
        </div>
      </div>
  );
}

export default Root;