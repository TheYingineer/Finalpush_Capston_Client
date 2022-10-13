import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom"; //for login/logout
import cookie from "cookie"; //for login/logout

const Navigation = () => {
  const navigate = useNavigate(); //for login/logout
  const cookies = cookie.parse(document.cookie); //for login/logout
  console.log(cookies); // this shows what the cookie looks like when you login

  return (
    // <Box sx={{ flexGrow: 1 }}>
    <Box>
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Yingineering
          </Typography> */}
          
          <h4>Yingineering</h4>

          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/">Home</Link>
            </li>

            <li className="nav-list-item">
              <Link to="/contactform">Contact</Link>
            </li>

            <li className="nav-list-item">
              <Link to="/addNewProduct">Add New Product</Link>
            </li>



            {/* LOGIN / LOGOUT STARTS HERE */}
            {/* added the condition rendering, where when you login, 
          there will be a logout on the right. Vise versa, whne you logout, 
          there will be login on the right
           */}
            {cookies.loggedIn ? (
              <li
                className="nav-list-item"
                onClick={() => {
                  document.cookie = cookie.serialize("loggedIn", null, {
                    maxAge: 0,
                  });
                  navigate("/login");
                }}
              >
                {" "}
                Logout{" "}
              </li>
            ) : (
              <li
                className="nav-list-item"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </li>
            )}
            {/*end of the conditional rendering for login/logout  */}

            {/* LOGIN / LOGOUT ENDS HERE */}

            {/* <li className="nav-list-item">
            <Link to="/AddNewListing">AddNewListing</Link>
          </li> */}
          </ul>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
