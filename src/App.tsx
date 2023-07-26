import AppLayout from "./pages/AppLayout";
import HomePage from "./components/home/HomePage";
import Login from "./pages/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Map from "./components/map/Map";
import RentHouses from "./components/Rent/RentHouses";
import PropertyPage from "./components/property/PropertyPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/map",
        element: <Map />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/rent",
        element: <RentHouses />,
      },
      {
        path: "/file/:fileId",
        element: <PropertyPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
