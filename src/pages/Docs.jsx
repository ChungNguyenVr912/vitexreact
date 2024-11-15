import {Outlet, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

function Docs() {
  const tabs = ['', 'install', 'config'];
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(tabs[index]);
  }, [index])
  return (
      <>
        <div>
          <span
              className="text-head text-9xl font-black bg-clip-text bg-gradient-to-br from-cyan-400 via-indigo-500 to-pink-600 text-transparent select-none cursor-pointer"
              onClick={() => setIndex(index => index < 2 ? index + 1 : 0)}
          >
            Docs
          </span>
        </div>
        <div className="mt-2">
          <Outlet/>
        </div>
      </>
  );
}

export default Docs;