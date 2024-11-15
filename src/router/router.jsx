import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Root from "../pages/Root.jsx";
import NotFound from "../pages/NotFound.jsx";
import Docs from "../pages/Docs.jsx";
import Components from "../pages/Components.jsx";
import GetStarted from "../components/GetStarted.jsx";
import Installation from "../components/Installation.jsx";
import Configuration from "../components/Configuration.jsx";

const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Root />,
        children: [
          {
            index: true,
            element: <Home/>
          },
          {
            path: 'docs',
            element: <Docs/>,
            children:[
              {
                index: true,
                element: <GetStarted />
              },
              {
                path: 'install',
                element: <Installation />
              },
              {
                path: 'config',
                element: <Configuration />
              }
            ]
          },
          {
            path: 'components',
            element: <Components/>
          }
        ]
      },
      {
        path: '*',
        element: <NotFound />,
      }
    ],
    {
      basename: '/app'
    }
)

export default router;