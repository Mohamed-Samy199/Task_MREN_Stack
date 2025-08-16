import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./pages/MainLayout/MainLayout";
import Dashbord from "./pages/Dashbord/Dashbord";
import { useContext } from "react";
import { AuthContext } from "./context/auth";
import RequireAuth from "./Components/ProtectedRoute/ProtectedRoute";


function App() {
  const { userData } = useContext(AuthContext);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "dashbord", element: <RequireAuth userData={userData} ><Dashbord /></RequireAuth> }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={routes} />

    </div>
  );
}

export default App;
