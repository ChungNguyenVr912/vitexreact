import {Outlet, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {product} from "../service/product.js";
import {DataContext} from "../app/context.jsx";

function Docs() {
  const tabs = ['', 'install', 'config'];
  const [index, setIndex] = useState(-1);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    if (index !== -1) navigate(tabs[index]);
  }, [index])

  useEffect(() => {
    product.getAll().then((res) => res.data).then(data => {
        console.log('data', data);
        setProducts(data);
    })
  }, []);
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
          <DataContext.Provider value={products}>
            <Outlet/>
          </DataContext.Provider>
        </div>
      </>
  );
}

export default Docs;