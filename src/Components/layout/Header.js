import React from "react";
import { AppBar, Box, Typography, Toolbar, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import "../../Style/HeaderStyles.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Header = () => {
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "grey" }}>
          <Toolbar>
            <Typography
              color={"black"}
              varient="h3"
              component="div"
              sx={{ flexGrow: 2 }}
            >
              Restaurant Landing Page
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/Blog"}>Blog</Link>
                </li>
                <li>
                  <Link to={"/About"}>About</Link>
                </li>
                <li>
                  <Link to={"/Contact"}>Contact</Link>
                </li>
                <li>
                  <Link to={"/Gallery"}>Gallery</Link>
                </li>
                <li>
                  <Link to={"/Landing"}>Landing</Link>
                </li>
              </ul>
            </Box>
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
