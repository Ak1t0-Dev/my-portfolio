import { Divider, Grid, styled } from "@mui/material";
import {
  aboutMe,
  aboutMeDetails,
  fullName,
  jobTitle,
  profile,
} from "../../constants/aboutme";
import { StyledTitle } from "../style";
import { changeFirstToUpperCase } from "../../uitls/letterUtils";
import myImage from "../../assets/images/about_me.jpg";

export const About = () => {
  return (
    <>
      <StyledMain>
        <StyledTitle>About Me</StyledTitle>
        <section>
          <StyledImg></StyledImg>
          <StyledProfile>
            <StyledName>{fullName}</StyledName>
            <StyledJobTitle>{jobTitle}</StyledJobTitle>
          </StyledProfile>
          <Divider />
          <p>{aboutMe}</p>
          <p>{aboutMeDetails}</p>
          <Divider />
          <Grid container spacing={2}>
            {Object.entries(profile).map(([key, value]) => (
              <Grid item xs={6} key={key}>
                <div key={key}>
                  <span>{changeFirstToUpperCase(key)}: </span>
                  <span>{value}</span>
                </div>
              </Grid>
            ))}
          </Grid>
          <Divider />
        </section>
        <section></section>
      </StyledMain>
    </>
  );
};

const StyledMain = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
});

const StyledName = styled("h2")({
  margin: "1rem 0 0 0",
  letterSpacing: ".1rem",
});

const StyledJobTitle = styled("span")({
  color: "#181818",
});

const StyledImg = styled("div")({
  minWidth: "300px",
  width: "100%",
  aspectRatio: "16 / 9",
  backgroundImage: `url(${myImage})`,
  backgroundPositionX: "20%",
  backgroundPositionY: "40%",
  margin: "2rem 0",
});

const StyledProfile = styled("div")({
  marginBottom: "1.5rem",
});
