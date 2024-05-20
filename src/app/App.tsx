import "./styles/global.css";
import React, { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthPage } from "@pages/AuthPage";
import { Chess } from "@pages/Chess";

import { LoginContextProvider, ThemeContextProvider } from "../shared/context";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
    errorElement: <div>Что-то пошло не так</div>,
  },
  {
    path: "chess",
    element: <Chess />,
  },
]);

export const App: FC = () => {
  return (
    <ThemeContextProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LoginContextProvider>
        <RouterProvider router={routes} />
      </LoginContextProvider>
    </ThemeContextProvider>
  );
};
