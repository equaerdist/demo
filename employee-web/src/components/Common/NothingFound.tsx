import React from "react";
import { Box, Typography, Button } from "@mui/material";

// Компонент NothingFound для отображения, когда нет контента
const NothingFound: React.FC<{ onRetry?: () => void }> = ({ onRetry }) => {
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
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          fontWeight: "bold",
          color: "var(--brand)",
        }}
      >
        Nothing Found
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginBottom: 2,
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
          color: "var(--text)",
        }}
      >
        Sorry, but we couldn't find any data matching your request.
      </Typography>

      {/* Если передан onRetry, показываем кнопку для повторной попытки */}
      {onRetry && (
        <Button
          onClick={onRetry}
          variant="contained"
          sx={{
            backgroundColor: "var(--brand)",
            color: "white",
            "&:hover": {
              backgroundColor: "#ff0055",
            },
          }}
        >
          Retry
        </Button>
      )}
    </Box>
  );
};

export default NothingFound;
