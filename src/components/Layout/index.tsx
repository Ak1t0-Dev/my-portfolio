import { Sidebar } from "../Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { Grid, styled } from "@mui/material";
import { easeOut, motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

export const Layout = () => {
  const location = useLocation();

  return (
    <StyledGridContainer container>
      <StyledGridSide
        item
        xs={12}
        md={3}
        sx={{ height: { xs: "10vh", md: "auto" }, minHeight: "80px" }}
      >
        <Sidebar />
      </StyledGridSide>
      <StyledGridMain
        item
        xs={12}
        md={9}
        sx={{ padding: { xs: "1rem 2rem", sm: "2rem 4rem" } }}
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
  );
};

const StyledGridContainer = styled(Grid)({
  height: "100vh",
});

const StyledGridSide = styled(Grid)({
  backgroundColor: "white",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  position: "sticky",
});
const StyledGridMain = styled(Grid)({
  backgroundColor: "#f8f8f8",
  overflowY: "auto",
  height: "100vh",
});
