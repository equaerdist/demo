import { Box, Skeleton } from "@mui/material";

export const Loading = () => {
  return (
    <Box sx={{ minWidth: 500 }}>
      <Skeleton variant="text" height={40} width="60%" />
      <Skeleton variant="text" height={40} width="80%" />
      <Skeleton variant="rectangular" height={100} width="100%" />
    </Box>
  );
};
