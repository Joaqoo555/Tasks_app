import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./layouts/NavBar/NavBar";
import Home from "./Home/Home";
import FormTask from "./pages/FormTask/TaskComponent";
import DetailTask from "./pages/DetailTask/DetailTask";
import "./index.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useState } from "react";

// Tema claro
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
  },
});

// Tema oscuro
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",

    },

    background: {
      default: "#303030",
      paper: "#424242",

    },
  },
});

function App() {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  const changeTheme = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar onChangeTheme={changeTheme} />}>
            <Route index element={<Home />}></Route>
            <Route path="/tasks/create" element={<FormTask />}></Route>
            <Route
              path="/tasks/details/:taskId"
              element={<DetailTask />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
