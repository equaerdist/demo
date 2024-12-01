import React from "react";
import { Link } from "react-router";
import { AppBar, Toolbar, Button } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "var(--bg-dark)", width: "100%", top: "10px" }}
    >
      <Toolbar>
        <Button
          component={Link}
          to="/employee"
          sx={{ color: "var(--text)", ":hover": { color: "var(--brand)" } }}
        >
          Employees
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
