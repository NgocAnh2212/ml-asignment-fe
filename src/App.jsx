import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/Homepage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import RestaurantPage from "./pages/RestaurantPage.jsx";
import LoginForm from "./components/LoginForm.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import TaskBar from "./components/TaskBar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
    
  },
  {
    path: "/auth",
    children: [
      { path: "", element: <Navigate to="login" replace /> },
      {
        path: "login",
        element: (
          <AuthPage>
            <LoginForm />
          </AuthPage>
        ),
      },
      {
        path: "register",
        element: (
          <AuthPage>
            <RegisterForm />
          </AuthPage>
        ),
      },
    ],
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />
  },


  {
    path: "/menu",
    element: <MenuPage />,
  },
  {
    path: "/restaurant",
    element: <RestaurantPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
