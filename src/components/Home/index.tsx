import { Box, keyframes, styled } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { BiLogoGithub } from "react-icons/bi";
import myImage from "../../assets/images/profile.jpeg";
import { fullName, jobTitle, message } from "../../constants/aboutme";
import "../style.css";

export const Home = () => {
  return (
    <StyledMain>
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
            <LinkedInIcon className="icon" />
          </li>
          <li>
            <EmailOutlinedIcon className="icon" />
          </li>
          <li>
            <BiLogoGithub className="icon" />
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
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  height: "calc(100vh - 8rem)",
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
