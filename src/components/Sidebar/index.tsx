/* eslint-disable react/jsx-no-undef */
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { logo, sidebarItems } from "../../constants/sidebarItems";
import { useNavigate } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export const Sidebar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const navigate = useNavigate();

  const handleClick = (url: string) => {
    navigate(url);
    setIsMenuOpened(true);
  };

  const handleHomeClick = () => {
    navigate(sidebarItems[0].url);
  };

  const handleMenuToggle = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const drawer = (
    <>
      <Divider />
      <nav>
        <List>
          {sidebarItems.map((item) => (
            <ListItem disablePadding key={item.name}>
              <ListItemButton onClick={() => handleClick(item.url)}>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
      <Divider />
    </>
  );

  return (
    <Box
      sx={{
        width: "80%",
        bgcolor: "background.paper",
        display: { xs: "flex", md: "block" },
        justifyContent: {
          xs: "space-between",
          md: "unset",
        },
        alignItems: {
          xs: "center",
          md: "unset",
        },
      }}
    >
      <StyledLogo
        sx={{
          position: { md: "absolute" },
          top: { md: "20px" },
          left: { md: "30px" },
        }}
        onClick={handleHomeClick}
      >
        <StyledTitle>{logo.title}</StyledTitle>
        <StyledSlogan>{logo.slogan}</StyledSlogan>
      </StyledLogo>
      <StyledMenuRoundedIcon
        sx={{ display: { xs: "block", md: "none" } }}
        onClick={handleMenuToggle}
      />
      <Drawer
        variant="temporary"
        anchor={"right"}
        open={isMenuOpened}
        onClose={handleMenuToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "flex", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            minWidth: "250px",
            padding: "1rem",
            justifyContent: { xs: "center" },
          },
        }}
      >
        <CloseIcon
          onClick={handleMenuToggle}
          sx={{
            position: "absolute",
            top: "20px",
            right: "20px",
            color: "#393e46",
          }}
        />
        {drawer}
      </Drawer>
      <Box sx={{ display: { xs: "none", md: "block" } }}>{drawer}</Box>
    </Box>
  );
};

const StyledMenuRoundedIcon = styled(MenuRoundedIcon)({
  border: "1px solid black",
  padding: "0.2rem",
  cursor: "pointer",
});

const StyledLogo = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100px",
  cursor: "pointer",
});

const StyledTitle = styled("span")({
  display: "inline-block",
  fontSize: "2rem",
  letterSpacing: "0.5rem",
});

const StyledSlogan = styled("span")({
  display: "inline-block",
  fontSize: "0.8rem",
  color: "#181818",
});
