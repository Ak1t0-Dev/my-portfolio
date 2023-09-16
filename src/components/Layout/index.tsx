import { Sidebar } from "../Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { Grid, styled } from "@mui/material";
import { easeOut, motion } from "framer-motion";

export const Layout = () => {
  const location = useLocation();
  return (
    <StyledGridContainer container>
      <StyledGridSide item xs={3}>
        <Sidebar />
      </StyledGridSide>
      <StyledGridMain item xs={9}>
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
  padding: "2rem 5rem",
  overflowY: "auto",
  height: "100vh",
});
