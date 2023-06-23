import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Register from "../src/pages/Register";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Write from "./pages/Write";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//CSS
import "./style.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Navbar />
        <Login />
        <Footer />
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div>
        <Navbar />
        <Register />
        <Footer />
      </div>
    ),
  },
  {
    path: "/post/:id",
    element: (
      <div>
        <Navbar />
        <Single />
        <Footer />
      </div>
    ),
  },
  {
    path: "/write",
    element: (
      <div>
        <Navbar />
        <Write />
        <Footer />
      </div>
    ),
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
