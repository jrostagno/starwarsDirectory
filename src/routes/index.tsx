import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Planets from "../pages/planets/Planets";
import Species from "../pages/species/Species";

interface Routes {
  path: string;
  component: ReactNode;
}

export const projectRoutes: Routes[] = [
  {
    path: "/",
    component: <Navigate to="/people" />,
  },
  {
    path: "/people",
    component: <Home />,
  },
  {
    path: "/planets",
    component: <Planets />,
  },
  {
    path: "/species",
    component: <Species />,
  },
];
