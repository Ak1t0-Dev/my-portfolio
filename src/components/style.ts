import { createTheme, styled } from "@mui/material";
import { grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: { main: grey[900] },
  },
});

export const StyledTitle = styled("h1")({
  fontSize: "2.5rem",
});

export const StyledSubTitle = styled("h2")({
  fontSize: "2rem",
});
