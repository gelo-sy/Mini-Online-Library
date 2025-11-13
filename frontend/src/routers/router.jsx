import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        { path: "/home", element: <div>Home</div> },
        { path: "/admin", element: <div>Admin</div> },
        { path: "/login", element: <div>login</div> }
    ]
  },
]);

export default router;