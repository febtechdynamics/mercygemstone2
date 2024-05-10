import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet, NavLink, Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SecurityIcon from "@mui/icons-material/Security";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/reducers/authSlice";

function AdminPanel() {
  // const { user, isLoading, isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logOut = () => dispatch(logout());
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" className="custom-bg">
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", gap: "10px" }}>
              <div className="flex gap-3 items-center">
                <Link to={"/admin"}>
                  <SecurityIcon />
                </Link>
                <Typography variant="h6" noWrap component="div">
                  MercyGem Admin
                </Typography>
              </div>
              <section className="hidden lg:flex items-center gap-3">
                <NavLink
                  className={({ isActive }) => {
                    return isActive
                      ? " text-gray-700 bg-white rounded-full  duration-200 px-3"
                      : "duration-200 hover:text-gray-700 hover:bg-white hover:rounded-full    px-3";
                  }}
                  style={{ textDecoration: "none" }}
                  key={"products"}
                  to={"/admin/products"}
                >
                  Products
                </NavLink>
                <NavLink
                  className={({ isActive }) => {
                    return isActive
                      ? " text-gray-700 bg-white rounded-full duration-200 px-3"
                      : "duration-200 hover:text-gray-700 hover:bg-white hover:rounded-full     px-3";
                  }}
                  style={{ textDecoration: "none" }}
                  key={"products"}
                  to={"/admin/users"}
                >
                  Users
                </NavLink>
                <NavLink
                  className={({ isActive }) => {
                    return isActive
                      ? " text-gray-700 bg-white rounded-full  duration-200 px-3"
                      : "duration-200 hover:text-gray-700 hover:bg-white hover:rounded-full     px-3";
                  }}
                  style={{ textDecoration: "none" }}
                  key={"products"}
                  to={"/"}
                >
                  Home
                </NavLink>
              </section>
            </Box>
            <Box>
              <button
                onClick={logOut}
                className="bg-red-500 px-3 py-1 rounded-full hover:bg-red-600 duration-200 ease-in"
              >
                Sign Out
              </button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />
        <div className="block lg:hidden">
          <DrawerPopUp />
        </div>
        <Outlet />
      </Box>
    </Box>
  );
}

function DrawerPopUp() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250, marginTop: "20px" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {[
          { link: "/admin/products", name: "Products" },
          { link: "/admin/users", name: "Users" },
          { link: "/", name: "Home Page" },
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <Link className="flex items-center" to={text.link}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div className="flex justify-end">
      <IconButton onClick={toggleDrawer(true)} aria-label="delete">
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default AdminPanel;
