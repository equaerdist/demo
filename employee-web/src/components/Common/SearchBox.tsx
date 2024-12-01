import React from "react";
import {
  TextField,
  MenuItem,
  Autocomplete,
  Box,
  LinearProgress,
} from "@mui/material";

interface SearchBoxProps {
  options: string[];
  searchValue: string;
  setSearchValue: (v: string) => void;
  isLoading: boolean;
  width?: number | string | null | undefined;
  placeholder?: string | null | undefined;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  options,
  searchValue,
  setSearchValue,
  isLoading,
  width,
  placeholder,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <Box
      sx={{
        width: width ?? "100%",
        backgroundColor: "var(--bg)",
        borderRadius: "8px",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        padding: "10px",
        position: "relative",
      }}
    >
      <Autocomplete
        freeSolo
        value={searchValue}
        onInputChange={(_, newValue) => setSearchValue(newValue)}
        options={options}
        inputValue={searchValue}
        renderInput={(params) => (
          <TextField
            {...params}
            label={placeholder ?? "Поиск"}
            variant="outlined"
            sx={{
              borderColor: "var(--brand)",
              input: {
                color: "var(--text)",
              },
              label: {
                ":focus": { color: "var(--brand)" },
                color: "var(--text)",
              },
              fieldset: {
                ":hover": { color: "var(--brand)" },
                borderColor: "var(--bg-dark)",
              },
              ":hover": {
                borderColor: "var(--brand)",
              },
              ":focus": {
                borderColor: "var(--brand)",
              },
              "&:hover fieldset": {
                borderColor: "var(--brand)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "var(--brand)",
              },
              "& .MuiOutlinedInput-root": {
                "& fiedset": {
                  borderColor: "var(--brand)",
                },
                "&:hover fieldset": {
                  borderColor: "var(--brand)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "var(--brand)",
                },
              },
            }}
            onChange={handleInputChange}
          />
        )}
        renderOption={(props, option) =>
          isLoading ? (
            <MenuItem
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "var(--brand)",
              }}
            >
              <LinearProgress
                sx={{
                  backgroundColor: "var(--brand)",
                  height: "4px",
                  width: "100%",
                }}
              />
            </MenuItem>
          ) : (
            <MenuItem
              {...props}
              sx={{
                backgroundColor: "var(--bg-dark)",
                color: "var(--text)",
                "&:hover": {
                  backgroundColor: "var(--bg-dark)",
                  color: "var(--brand)",
                },
              }}
            >
              {option}
            </MenuItem>
          )
        }
      />
    </Box>
  );
};

export default SearchBox;
