import { Alert, AlertTitle } from "@mui/material";

export const Error = () => {
  return (
    <Alert severity="error" style={{ marginTop: "20px" }}>
      <AlertTitle>Error</AlertTitle>
      Oops! Something went wrong. Please try again later.
    </Alert>
  );
};
