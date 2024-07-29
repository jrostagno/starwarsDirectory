import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { projectRoutes } from "./routes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CustomThemeOptions, getPaletteMode } from "./config/theme/theme";

const StarWarsApp = () => {
  const theme = createTheme({
    ...CustomThemeOptions("dark"),
    ...getPaletteMode("light"),
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            {projectRoutes.map((page, index) => (
              <Route key={index} path={page.path} element={page.component} />
            ))}
            <Route path={"*"} element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default StarWarsApp;
