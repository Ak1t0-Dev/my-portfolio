import { Box, styled } from "@mui/material";
import { StyledMain, StyledTitle } from "../style";
import { portfolio } from "../../constants/portfolio";
import spendShare from "../../assets/images/portfolio/spend_share.png";
import theThree from "../../assets/images/portfolio/the_three.png";

export const Portfolio = () => {
  const image = [theThree, spendShare];
  return (
    <StyledMain>
      <StyledTitle sx={{ margin: { xs: "1rem 0", md: "1.5rem 0" } }}>
        Portfolio
      </StyledTitle>

      <StyledPortfolioWrapper>
        {portfolio.map((item, index) => (
          <StyledPortfolio key={index}>
            <StyledPortfolioTitle>{item.title}</StyledPortfolioTitle>
            <StyledPortfolioDescription>
              {item.description}
            </StyledPortfolioDescription>
            <StyledImageWrapper>
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "4/3",
                  backgroundImage: `url(${image[index]})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  outline: "1.5px solid black",
                }}
              />
            </StyledImageWrapper>
            <StyledUrlWrapper>
              <StyledUrl href={item.url} target="_blank" rel="noreferrer">
                Github
              </StyledUrl>
              <StyledUrl href={item.appUrl} target="_blank" rel="noreferrer">
                App
              </StyledUrl>
            </StyledUrlWrapper>
          </StyledPortfolio>
        ))}
      </StyledPortfolioWrapper>
    </StyledMain>
  );
};

const StyledPortfolioWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  fontFamily: "Titillium Web",
  gap: "2rem",
});

const StyledImageWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

const StyledUrlWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginTop: "1rem",
  gap: "1rem",
});

const StyledPortfolio = styled(Box)({
  minWidth: "300px",
  backgroundColor: "#FDFDFF",
  border: "2px solid rgb(100,149,237)",
  padding: "1rem",
});

const StyledUrl = styled("a")({
  color: "black",
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": {
    color: "rgb(100,149,237)",
    border: "1.5px solid rgb(100,149,237)",
  },
  fontSize: "0.8rem",
  fontWeight: "bold",
  border: "1.5px solid black",
  padding: "0.2rem 0.5rem",
  transition: "0.5s",
});

const StyledPortfolioTitle = styled("h3")({
  margin: "0",
});

const StyledPortfolioDescription = styled("p")({
  marginTop: "0",
  fontSize: "0.9rem",
  overflow: "hidden",
});
