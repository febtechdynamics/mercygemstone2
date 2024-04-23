import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../../../public/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import Search from "../Searchbar/Search";
import SearchIcon from "@mui/icons-material/Search";
import SearchBar from "./SearchBar";

const pages = [
  { title: "Home", link: "/" },
  { title: "Products", link: "/products" },
  { title: "Contact", link: "/contact" },
  { title: "About", link: "/about" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [isSearchVisible, setIsSearchVisible] = React.useState(false);

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className="mercygem_bg" position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="/" className="mercy_logo">
              <img src={logo} alt="Logo" />
            </Link>
          </Box>

          {/* links */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "black" }} color="black" />
            </IconButton>
            {/* mobile menu */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                justifyContent: "flex-end",
                "& .MuiPaper-root": {
                  border: "none", // Remove default border
                  outline: "none", // Remove default outline
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  className="decoration-transparent border-none outline-none"
                  key={page.link}
                  sx={{ border: "none", outline: "none" }}
                  onClick={handleCloseNavMenu}
                >
                  <NavLink
                    className={({ isPending, isActive }) => {
                      return isActive
                        ? " text-gray-700 text-lg duration-200 border-b-2 border-white px-3 py-1"
                        : " text-gray-700 duration-200 hover:border-b-2 hover:border-white text-lg px-3 py-1";
                    }}
                    style={{ textDecoration: "none" }}
                    key={page.link}
                    to={page?.link}
                    // onClick={handleCloseNavMenu}
                  >
                    {page?.title}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* mobile logo */}
          <Box
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/" className="mercy_logo">
              <img src={logo} alt="Logo" />
            </Link>
          </Box>

          {/* desktop menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
            }}
          >
            {pages?.map((page, i) => (
              <NavLink
                className={({ isPending, isActive }) => {
                  return isActive
                    ? " text-white text-lg duration-200 border-b-2 border-white px-3  py-1  "
                    : " text-white duration-200 hover:border-b-2 hover:border-white text-lg px-3 py-1";
                }}
                style={{ textDecoration: "none" }}
                key={i}
                to={page?.link}
                onClick={handleCloseNavMenu}
              >
                {page?.title}
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {!isSearchVisible && (
              <Tooltip title="Search Products">
                <div className="nave_search flex ">
                  <button
                    className={`bg-transparent search_button px-2 ${
                      isSearchVisible ? "border" : "border-none"
                    }`}
                    onClick={toggleSearchVisibility}
                  >
                    <SearchIcon sx={{ color: "white" }} />
                  </button>
                </div>
              </Tooltip>
            )}

            {isSearchVisible && (
              <Search toggleSearchVisibility={toggleSearchVisibility} />
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
