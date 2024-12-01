import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router";

const NotFound: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
        backgroundColor: "var(--bg-dark)",
        color: "var(--text)",
        textAlign: "center",
        padding: 3,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "6rem", sm: "8rem", md: "10rem" },
          fontWeight: "bold",
          color: "var(--brand)",
        }}
      >
        404
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginBottom: 2,
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
          color: "var(--text)",
        }}
      >
        Oops! The page you are looking for does not exist.
      </Typography>
      <Button
        component={Link}
        to="/employee"
        variant="contained"
        sx={{
          backgroundColor: "var(--brand)",
          color: "white",
          "&:hover": {
            backgroundColor: "var(--bg)",
          },
        }}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
