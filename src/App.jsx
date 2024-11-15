import router from "./router/router.jsx";
import {RouterProvider} from "react-router-dom";

function App() {
  const future = {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: false,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  }

  return (
      <RouterProvider router={router} future={future}></RouterProvider>
  )
}

export default App
