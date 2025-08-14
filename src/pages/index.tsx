import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../app.layout";
import NotFound from "./notFound";
import Landing from "./landing";


const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
