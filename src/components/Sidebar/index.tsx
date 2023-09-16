/* eslint-disable react/jsx-no-undef */
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { sidebarItems } from "../../constants/sidebarItems";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleClick = (url: string) => {
    navigate(url);
  };

  return (
    <Box sx={{ width: "80%", bgcolor: "background.paper" }}>
      <Divider />
      <nav aria-label="main mailbox folders">
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
    </Box>
  );
};
