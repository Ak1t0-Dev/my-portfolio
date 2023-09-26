import { Box, createTheme, styled } from "@mui/material";
import { grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: { main: grey[900] },
  },
});

export const StyledTitle = styled("h1")({
  fontSize: "2.5rem",
  fontFamily: "Titillium Web",
  letterSpacing: ".3rem",
});

export const StyledSubTitle = styled("h2")({
  fontSize: "2rem",
  fontFamily: "Titillium Web",
  letterSpacing: ".2rem",
});

export const StyledTitleSm = styled("h3")({
  fontFamily: "Titillium Web",
  letterSpacing: ".1rem",
});

export const StyledMain = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
});
