import AppLayout from "./pages/AppLayout";
import HomePage from "./components/home/HomePage";
import Login from "./pages/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";


import RentHouses from "./components/Rent/RentHouses";
import PropertyPage from "./components/property/PropertyPage";
import MapLayout from "./components/map/MapLayout";

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
        element: <MapLayout />,
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
