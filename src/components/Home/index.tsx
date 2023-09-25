import { Box, keyframes, styled } from "@mui/material";
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from "react-icons/ai";
import myImage from "../../assets/images/profile.jpeg";
import {
  email,
  fullName,
  gitHubUrl,
  jobTitle,
  linkedInUrl,
  message,
} from "../../constants/aboutme";
import "../style.css";

export const Home = () => {
  return (
    <StyledMain
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "center",
        alignItems: "center",
        height: { xs: "calc(100vh - 5rem)", sm: "calc(100vh - 10rem)" },
        gap: { xs: "1rem", sm: "2rem" },
      }}
    >
      <StyledImg></StyledImg>
      <StyledIntroduce>
        <Box sx={{ display: "flex" }}>
          <StyledTitle>{fullName}</StyledTitle>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <StyledSpinBlock></StyledSpinBlock>
            <StyledSpinBlockSmall></StyledSpinBlockSmall>
          </Box>
        </Box>
        <StyledJobTitle>{jobTitle}</StyledJobTitle>
        <StyledParagraph>{message}</StyledParagraph>
        <StyledList>
          <li>
            <StyledAnchor href={linkedInUrl} target="_blank" rel="noreferrer">
              <AiFillLinkedin className="icon" />
            </StyledAnchor>
          </li>
          <li>
            <StyledAnchor href={email}>
              <AiOutlineMail className="icon" />
            </StyledAnchor>
          </li>
          <li>
            <StyledAnchor href={gitHubUrl} target="_blank" rel="noreferrer">
              <AiFillGithub className="icon" />
            </StyledAnchor>
          </li>
        </StyledList>
      </StyledIntroduce>
    </StyledMain>
  );
};

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const gradient = keyframes`
  0% {
    border-image: linear-gradient(45deg, red, blue) 1;
  }
  25% {
    border-image: linear-gradient(135deg, yellow, green) 1;
  }
  50% {
    border-image: linear-gradient(225deg, blue, red) 1;
  }
  75% {
    border-image: linear-gradient(315deg, green, yellow) 1;
  }
  100% {
    border-image: linear-gradient(45deg, red, blue) 1;
  }
`;

const StyledMain = styled("div")({
  display: "flex",
});

const StyledIntroduce = styled("div")({
  maxWidth: "480px",
});

const StyledTitle = styled("h1")({
  letterSpacing: "0.6rem",
  fontSize: "3.1rem",
  margin: "0",
  color: "#181818",
});

const StyledJobTitle = styled("span")({
  fontSize: "1.2rem",
  color: "#181818",
  letterSpacing: ".3rem",
});

const StyledParagraph = styled("p")({
  fontFamily: "Titillium Web",
  fontSize: "1.2rem",
  margin: "1rem 0",
});

const StyledList = styled("ul")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  padding: "0",
  gap: "1rem",
  listStyleType: "none",
});

const StyledSpinBlock = styled("div")({
  width: "30px",
  aspectRatio: "1 / 1",
  border: "4px solid transparent",
  borderRadius: "50%",
  animation: `${spin} 5s linear infinite, ${gradient} 5s linear infinite`,
});

const StyledSpinBlockSmall = styled("div")({
  width: "26px",
  aspectRatio: "1 / 1",
  border: "4px solid transparent",
  borderRadius: "50%",
  animation: `${spin} 4s linear infinite, ${gradient} 5s linear infinite`,
});

const StyledImg = styled("div")({
  minWidth: "220px",
  aspectRatio: "1 / 1",
  borderRadius: "50%",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${myImage})`,
  outline: "3px solid black",
});

const StyledAnchor = styled("a")({
  textDecoration: "none",
  color: "black",
  transition: "0.5s",
  "&:hover": {
    color: "#4169E1",
  },
});
