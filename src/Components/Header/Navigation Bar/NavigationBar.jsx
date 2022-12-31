import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

// import Container from "@mui/material/Container";
import Home from "@mui/icons-material/Home";

const NavigationBar = () => {
  const navData = [
    "ExalTech Software",
    "Products",
    "Pricing",
    "About",
    "Service",
    "Register",
    "Login",
  ];
  return (
    <AppBar position="static" >
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Home />

          {navData.map((item) => {
            return (
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {item}
              </Typography>
            );
          })}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;
