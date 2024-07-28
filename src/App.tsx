import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import { projectRoutes } from "./routes";

const StarWarsApp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {projectRoutes.map((page, index) => (
            <Route key={index} path={page.path} element={page.component} />
          ))}
          {/* <Route path={'*'} element={<Navigate to="/" />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default StarWarsApp;
