import { Sidebar } from "../Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { Grid, styled } from "@mui/material";
import { easeOut, motion } from "framer-motion";
import { Particle } from "../Particle/Particle";

export const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Particle />
      <StyledGridContainer
        container
        sx={{
          height: { xs: "none", md: "100vh" },
        }}
      >
        <StyledGridSide
          item
          xs={12}
          md={3}
          sx={{
            height: { xs: "10vh", md: "auto" },
            minHeight: "80px",
            position: { xs: "sticky", md: "none" },
            top: { xs: 0, md: "none" },
          }}
        >
          <Sidebar />
        </StyledGridSide>
        <StyledGridMain
          item
          xs={12}
          md={9}
          sx={{
            padding: { xs: "0rem 1.5rem", sm: "2rem 4rem" },
            height: { xs: "none", md: "100vh" },
          }}
        >
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, easeOut }}
            exit={{ opacity: 0 }}
          >
            <Outlet />
          </motion.main>
        </StyledGridMain>
      </StyledGridContainer>
    </>
  );
};

const StyledGridContainer = styled(Grid)({});

const StyledGridSide = styled(Grid)({
  backgroundColor: "white",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  position: "sticky",
});
const StyledGridMain = styled(Grid)({
  overflowY: "auto",
});
