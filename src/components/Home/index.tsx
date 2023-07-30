import { styled } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import myImage from "../../assets/images/image-1.png";

export const Home = () => {
  return (
    <StyledMain>
      <div>
        <img src={myImage} alt="my-profile" />
      </div>
      <div>
        <h1>AKITO TOBITA</h1>
        <p>
          I'm a Fullstack Developer at heart and create features that are best
          suited for the job at hand.
        </p>
        <StyledList>
          <li>
            <LinkedInIcon />
          </li>
          <li>
            <FacebookIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
        </StyledList>
      </div>
    </StyledMain>
  );
};

const StyledMain = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
});

const StyledList = styled("ul")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  padding: "0",
  gap: "1rem",
  listStyleType: "none",
});
