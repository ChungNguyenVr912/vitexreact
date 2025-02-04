import {memo, useContext, useEffect, useMemo, useState} from 'react';
import {DataContext} from "../app/context.jsx";

function GetStarted() {
  const products = useContext(DataContext);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [date, setDate] = useState();
  const sum = useMemo(() => {
    return number1 + number2;
  }, [number1, number2]);

  const dateChange = (e) => {
    setDate(e.target.value);
  }

  useEffect(() => {
  }, []);

  return (
      <>
        <div>GetStarted</div>
        <div>
          <div className="flex flex-col w-1/5 gap-1">
            <h2>Sum: {sum}</h2>
            <input type="number" value={number1} onChange={event => {
              setNumber1(+event.target.value)
            }}/>
            <input type="number"
                   value={number2}
                   onChange={event => {
                     setNumber2(+event.target.value)
                   }}
            />
            <input type="date"
                   onChange={dateChange}
                   onFocus={event => {
                     event.target.click()
                   }}
            />
          </div>
        </div>
        <div className=" flex-wrap w-full">
          {
            products.map((product, index) => (
                <div key={index} className="w-1/5">
                  <h2>{product.name}</h2>
                  <img src={product.image} alt="" className="w-full"/>
                </div>
            ))
          }
        </div>
      </>
  );
}

export default memo(GetStarted);