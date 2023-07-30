import React from "react";
import { Sidebar } from "../Sidebar";
import { Outlet } from "react-router-dom";
import { Grid, styled } from "@mui/material";

export const Layout = () => {
  return (
    <StyledGridContainer container>
      <StyledGridSide item xs={3}>
        <Sidebar />
      </StyledGridSide>
      <StyledGridMain item xs={9}>
        <Outlet />
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
});
const StyledGridMain = styled(Grid)({
  backgroundColor: "#f8f8f8",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});
