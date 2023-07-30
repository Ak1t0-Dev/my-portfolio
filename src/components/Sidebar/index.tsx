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

export const Sidebar = () => {
  return (
    <Box sx={{ width: "80%", bgcolor: "background.paper" }}>
      <Divider />
      <nav aria-label="main mailbox folders">
        <List>
          {sidebarItems.map((item) => (
            <ListItem disablePadding key={item.name}>
              <ListItemButton>
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
