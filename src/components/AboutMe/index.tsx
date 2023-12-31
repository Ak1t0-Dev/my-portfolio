import { Box, Button, Divider, ThemeProvider, styled } from "@mui/material";
import {
  aboutMeDetails,
  career,
  developing,
  education,
  experienced,
  fullName,
  jobTitle,
  profile,
  resumeUrl,
} from "../../constants/aboutme";
import {
  StyledMain,
  StyledSubTitle,
  StyledTitle,
  StyledTitleSm,
  theme,
} from "../style";
import { changeFirstToUpperCase } from "../../uitls/letterUtils";
import PushPinIcon from "@mui/icons-material/PushPin";
import myImage from "../../assets/images/about_me.jpg";
import { motion, Variants } from "framer-motion";
import "../style.css";

export const AboutMe = () => {
  const cardVariants: Variants = {
    offscreen: {
      y: 5,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2,
      },
    },
  };

  const careerVariants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1,
      },
    },
  };

  const handleClick = () => {
    window.open(resumeUrl, "_blank");
  };

  return (
    <>
      <StyledMain>
        <StyledTitle sx={{ margin: { xs: "1rem 0", md: "1.5rem 0" } }}>
          About Me
        </StyledTitle>
        <section>
          <StyledImg
            sx={{
              backgroundPositionX: { xs: "20%", lg: "none" },
              backgroundPositionY: { xs: "40%", lg: "none" },
              backgroundPosition: { xs: "none", lg: "center" },
            }}
          />
          <StyledProfileWrapper
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
            }}
          >
            <Box>
              <StyledName>{fullName}</StyledName>
              <StyledJobTitle>{jobTitle}</StyledJobTitle>
            </Box>
            <StyledButtonWrapper>
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  color={"primary"}
                  onClick={handleClick}
                  sx={{ width: "150px" }}
                >
                  View Resume
                </Button>
              </ThemeProvider>
            </StyledButtonWrapper>
          </StyledProfileWrapper>
          <Box
            sx={{
              backgroundColor: "#FDFDFF",
              padding: "1rem 2rem",
              border: "1.5px solid rgb(100,149,237)",
            }}
          >
            <StyledTypo>
              {aboutMeDetails.map((item, index) => (
                <span key={index} style={{ display: "block" }}>
                  {item}
                </span>
              ))}
            </StyledTypo>
            <Divider />
            <StyledUl>
              {Object.entries(profile).map(([key, value], index) => (
                <StyledList key={index}>
                  <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    <span style={{ marginRight: "0.8rem" }}>
                      <strong>{changeFirstToUpperCase(key)}: </strong>
                    </span>
                    {typeof value === "string" ? (
                      <StyledSpan>{value}</StyledSpan>
                    ) : (
                      value.map((item, index) => (
                        <StyledSpan key={index}>{item}</StyledSpan>
                      ))
                    )}
                  </Box>
                </StyledList>
              ))}
            </StyledUl>
          </Box>
        </section>
        <section>
          <StyledSubTitle sx={{ margin: { xs: "0.8rem 0", md: "1.2rem 0" } }}>
            Skills
          </StyledSubTitle>
          <StyledSkillsWrapper
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
          >
            <StyledSkillsBox sx={{ width: { xs: "100%", sm: "40%" } }}>
              <StyledTitleSm>Experienced</StyledTitleSm>

              <StyledSkillsUl>
                {experienced.map((item, index) => (
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false, amount: 0.8 }}
                    key={index}
                  >
                    <motion.div variants={cardVariants}>
                      <StyledSkillsLi
                        sx={{ maxWidth: { xs: "100%", sm: "300px" } }}
                      >
                        {item}
                      </StyledSkillsLi>
                    </motion.div>
                  </motion.div>
                ))}
              </StyledSkillsUl>
            </StyledSkillsBox>
            <StyledSkillsBox sx={{ width: { xs: "100%", sm: "40%" } }}>
              <StyledTitleSm>Developing</StyledTitleSm>
              <StyledSkillsUl>
                {developing.map((item, index) => (
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false, amount: 0.8 }}
                    key={index}
                  >
                    <motion.div className="card" variants={cardVariants}>
                      <StyledSkillsLi
                        sx={{ maxWidth: { xs: "100%", sm: "300px" } }}
                      >
                        {item}
                      </StyledSkillsLi>
                    </motion.div>
                  </motion.div>
                ))}
              </StyledSkillsUl>
            </StyledSkillsBox>
          </StyledSkillsWrapper>
        </section>
        <section>
          <StyledSubTitle sx={{ margin: { xs: "0.8rem 0", md: "1.2rem 0" } }}>
            My Career
          </StyledSubTitle>
          {career.map((item, index) => (
            <StyledJourney key={index}>
              <StyledJourneyLine>
                <StyledPushPinOutlinedIcon />
                <StyledDivider></StyledDivider>
              </StyledJourneyLine>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                style={{ width: "100%" }}
              >
                <motion.div variants={careerVariants}>
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
                        {item.results.map((result, index) => (
                          <li key={index}>
                            <p>{result}</p>
                          </li>
                        ))}
                      </ul>
                    </StyledCareerDetail>
                  </StyledCareer>
                </motion.div>
              </motion.div>
            </StyledJourney>
          ))}
        </section>
        <section>
          <StyledSubTitle sx={{ margin: { xs: "0.8rem 0", md: "1.2rem 0" } }}>
            My Education
          </StyledSubTitle>
          {education.map((item, index) => (
            <StyledJourney key={index}>
              <StyledJourneyLine>
                <StyledPushPinOutlinedIcon />
                <StyledDivider></StyledDivider>
              </StyledJourneyLine>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                style={{ width: "100%" }}
              >
                <motion.div variants={careerVariants}>
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
                </motion.div>
              </motion.div>
            </StyledJourney>
          ))}
        </section>
      </StyledMain>
    </>
  );
};

const StyledProfileWrapper = styled(Box)({
  display: "flex",
  gap: "1rem",
  marginBottom: "1.5rem",
});

const StyledJobTitle = styled("span")({
  fontSize: "1rem",
  color: "#181818",
  letterSpacing: ".1rem",
});

const StyledTypo = styled(Box)({
  fontSize: "1rem",
  color: "#181818",
  padding: "1rem",
  fontFamily: "Titillium Web",
});

const StyledImg = styled(Box)({
  minWidth: "300px",
  width: "100%",
  aspectRatio: "16 / 9",
  backgroundImage: `url(${myImage})`,
  margin: "2rem 0",
  backgroundRepeat: "no-repeat",
});

const StyledUl = styled("ul")({
  padding: "0 1rem",
  listStyle: "none",
});

const StyledList = styled("li")({
  fontSize: "1rem",
  fontFamily: "Titillium Web",
  marginBottom: "1rem",
});

const StyledSpan = styled("span")({
  padding: "0.2rem 0.5rem",
  border: "1.2px solid black",
  borderRadius: "0.8rem",
  margin: "0 0.5rem 0.5rem 0",
  fontSize: "0.8rem",
});

const StyledButtonWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const StyledSkillsWrapper = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  width: "100%",
});

const StyledSkillsBox = styled(Box)({
  width: "40%",
});

const StyledSkillsUl = styled("ul")({
  listStyle: "none",
  row: 10,
  paddingLeft: "1rem",
});

const StyledSkillsLi = styled("li")({
  padding: "0.4rem 1rem",
  border: "1.5px solid black",
  textAlign: "center",
  fontSize: "0.8rem",
  marginBottom: "0.7rem",
  boxShadow: "5px 5px gray",
  minWidth: "150px",
  backgroundColor: "white",
});

const StyledItemTitle = styled("h6")({
  margin: "0.5rem 0",
});

const StyledName = styled("h2")({
  fontSize: "2rem",
  margin: "0",
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
  margin: "0.2rem 0.7rem",
  minWidth: "300px",
  width: "70%",
});

const StyledCareerDetail = styled(Box)({
  boxSizing: "border-box",
  padding: "0.2rem 1rem",
  margin: "0.7rem 0",
  backgroundColor: "white",
  borderRadius: "0.5rem",
  boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
  width: "100%",
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
  backgroundColor: "white",
});
