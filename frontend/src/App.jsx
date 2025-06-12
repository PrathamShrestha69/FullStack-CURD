import React from "react";
import User from "./Components/User";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import AddUsers from "./Components/addUsers/AddUsers.jsx";
import Update from "./Components/updateUser/Update.jsx";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <User /> },
    {
      path: "/add",
      element: <AddUsers />,
    },
    {
      path: "/update/:id",
      element: <Update />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
