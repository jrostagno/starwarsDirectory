import { ReactNode } from "react";
import Home from "../pages/home/Home";

interface Routes {
  path: string;
  component: ReactNode;
}

export const projectRoutes: Routes[] = [
  {
    path: "/",
    component: <Home />,
  },
];
