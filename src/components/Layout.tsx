import { NavLink, Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";

export default function Layout() {
  const setActive = ({ isActive }) => (isActive ? "active-link" : "");

  return (
    <div className="container">
      <header>
        <Box>
          <AppBar position="static" sx={{ height: "90px" }}>
            <Toolbar sx={{ flexGrow: 1 }}>
              <Typography variant="h5" sx={{ flexGrow: 1 }}>
                <NavLink to="/" className={setActive}>
                  Крутить!
                </NavLink>
              </Typography>
              <Typography variant="h5">
                <NavLink to="/about" className={setActive}>
                  О нас
                </NavLink>
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Тут будет футер</footer>
    </div>
  );
}
