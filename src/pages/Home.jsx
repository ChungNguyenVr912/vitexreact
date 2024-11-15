import {useLocation} from "react-router-dom";

function Home() {
  const route = useLocation();

  console.log('route', route);

  return (
      <div>
        <h1>Home</h1>
      </div>
  );
}

export default Home;