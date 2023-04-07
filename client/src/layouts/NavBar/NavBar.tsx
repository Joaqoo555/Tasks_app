import { Routes, Route, Outlet } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { Link } from "react-router-dom";
import { Theme, useTheme } from "@emotion/react";

interface INT_NavBar {
  onChangeTheme: Function;
}

const NavBar = ({ onChangeTheme }: INT_NavBar) => {
  const theme = useTheme();
  console.log(theme.palette.mode);
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <AppBar position="static" color="transparent">
          <Container maxWidth="xl">
            <Toolbar>
              <Typography
                sx={{
                  flexGrow: 1,
                }}
              >
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: theme.palette.mode === "dark" ? "#fff" : "#000",
                  }}
                >
                  ArgenTASK
                </Link>
              </Typography>
              <Link to="/tasks/create/" style={{ textDecoration: "none" }}>
                <Button color="primary" variant="contained" sx={{
                  flex: ""
                }}>
                Create Task
                <AddCircleIcon sx={{
                  ml: 2,
                  textAlign: "center"

                }}></AddCircleIcon>
                </Button>
              </Link>
              <IconButton
                sx={{ ml: 8 }}
                onClick={() => onChangeTheme()}
                color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
        <Container maxWidth="lg"></Container>
      </Box>
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </div>
  );
};

export default NavBar;
