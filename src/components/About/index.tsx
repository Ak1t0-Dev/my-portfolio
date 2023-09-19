import {
  Box,
  Button,
  Divider,
  Grid,
  ThemeProvider,
  styled,
} from "@mui/material";
import {
  aboutMe,
  aboutMeDetails,
  fullName,
  jobTitle,
  profile,
} from "../../constants/aboutme";
import { StyledTitle, theme } from "../style";
import { changeFirstToUpperCase } from "../../uitls/letterUtils";
import myImage from "../../assets/images/about_me.jpg";

export const About = () => {
  return (
    <>
      <StyledMain>
        <StyledTitle sx={{ margin: { xs: "1rem 0", md: "1.5rem 0" } }}>
          About Me
        </StyledTitle>
        <section>
          <StyledImg></StyledImg>
          <StyledProfileWrapper>
            <StyledProfile>
              <StyledName>{fullName}</StyledName>
              <StyledJobTitle>{jobTitle}</StyledJobTitle>
            </StyledProfile>
            <StyledButtonWrapper>
              <ThemeProvider theme={theme}>
                <Button variant="contained" color={"primary"}>
                  Download CV
                </Button>
              </ThemeProvider>
            </StyledButtonWrapper>
          </StyledProfileWrapper>
          <Divider />
          <StyledTypo>
            <p>{aboutMe}</p>
            <p>{aboutMeDetails}</p>
          </StyledTypo>
          <Divider />
          <StyledGrid container spacing={3}>
            {Object.entries(profile).map(([key, value]) => (
              <StyledGridItem item xs={6} key={key}>
                <div key={key}>
                  <span>
                    <strong>{changeFirstToUpperCase(key)}: </strong>
                  </span>
                  <span>{value}</span>
                </div>
              </StyledGridItem>
            ))}
          </StyledGrid>
          <Divider />
        </section>
        <section></section>
      </StyledMain>
    </>
  );
};

const StyledMain = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
});

const StyledProfileWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const StyledButtonWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const StyledProfile = styled(Box)({
  marginBottom: "1.5rem",
});

const StyledName = styled("h2")({
  fontSize: "2rem",
  margin: "1rem 0 0 0",
  letterSpacing: ".1rem",
});

const StyledJobTitle = styled("span")({
  fontSize: "1rem",
  color: "#181818",
  letterSpacing: ".1rem",
});

const StyledTypo = styled(Box)({
  fontSize: "1rem",
  color: "#181818",
  padding: "1rem 2rem",
});

const StyledImg = styled(Box)({
  minWidth: "300px",
  width: "100%",
  aspectRatio: "16 / 9",
  backgroundImage: `url(${myImage})`,
  backgroundPositionX: "20%",
  backgroundPositionY: "40%",
  margin: "2rem 0",
});

const StyledGridItem = styled(Grid)({
  fontSize: "1rem",
});

const StyledGrid = styled(Grid)({
  padding: "2rem",
});
