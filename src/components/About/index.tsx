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
  career,
  education,
  fullName,
  jobTitle,
  profile,
} from "../../constants/aboutme";
import { StyledSubTitle, StyledTitle, theme } from "../style";
import { changeFirstToUpperCase } from "../../uitls/letterUtils";
import PushPinIcon from "@mui/icons-material/PushPin";
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
        <section>
          <StyledSubTitle sx={{ margin: { xs: "0.8rem 0", md: "1.2rem 0" } }}>
            My Career
          </StyledSubTitle>
          {career.map((item) => (
            <StyledJourney>
              <StyledJourneyLine>
                <StyledPushPinOutlinedIcon />
                <StyledDivider></StyledDivider>
              </StyledJourneyLine>
              <StyledCareer>
                <StyledRoundSpan>{item.duration}</StyledRoundSpan>
                <StyledCareerDetail>
                  <StyledItemTitle>
                    <StyledBoxCompany>
                      <span>{item.company}</span>
                      {", "}
                      <span>{item.location}</span>
                    </StyledBoxCompany>
                    <StyledPosition>{item.postion}</StyledPosition>
                  </StyledItemTitle>
                  <ul>
                    {item.results.map((result) => (
                      <li>
                        <p>{result}</p>
                      </li>
                    ))}
                  </ul>
                </StyledCareerDetail>
              </StyledCareer>
            </StyledJourney>
          ))}
        </section>
        <section>
          <StyledSubTitle sx={{ margin: { xs: "0.8rem 0", md: "1.2rem 0" } }}>
            My Education
          </StyledSubTitle>
          {education.map((item) => (
            <StyledJourney>
              <StyledJourneyLine>
                <StyledPushPinOutlinedIcon />
                <StyledDivider></StyledDivider>
              </StyledJourneyLine>
              <StyledCareer>
                <StyledRoundSpan>{item.duration}</StyledRoundSpan>
                <StyledCareerDetail>
                  <StyledItemTitle>
                    <StyledBoxCompany>
                      <span>{item.school}</span>
                      {", "}
                      <span>{item.location}</span>
                    </StyledBoxCompany>
                    <StyledPosition>{item.major}</StyledPosition>
                  </StyledItemTitle>
                </StyledCareerDetail>
              </StyledCareer>
            </StyledJourney>
          ))}
        </section>
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

const StyledItemTitle = styled("h6")({
  margin: "0.5rem 0",
});

const StyledName = styled("h2")({
  fontSize: "2rem",
  margin: "1rem 0 0 0",
  letterSpacing: ".1rem",
});

const StyledJourney = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
});

const StyledJourneyLine = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const StyledCareer = styled(Box)({
  padding: "0.2rem 0.7rem",
  minWidth: "300px",
  width: "70%",
});

const StyledCareerDetail = styled(Box)({
  padding: "0.2rem 1rem",
  margin: "0.7rem 0",
  backgroundColor: "white",
  borderRadius: "0.5rem",
  boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
});

const StyledBoxCompany = styled(Box)({
  fontSize: "1rem",
  marginBottom: "0.3rem",
});

const StyledPosition = styled("span")({
  fontSize: "0.8rem",
  color: "dimgray",
});

const StyledDivider = styled(Box)({
  width: "2px",
  flexGrow: "1",
  backgroundColor: "black",
  height: "5vh",
});

const StyledRoundSpan = styled("span")({
  padding: "0.2rem 0.7rem",
  borderBottom: "1px solid black",
});

const StyledPushPinOutlinedIcon = styled(PushPinIcon)({
  border: "2px solid black",
  padding: "0.2rem",
  fontSize: "1rem",
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
