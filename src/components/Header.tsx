import { NavLink } from "react-router-dom";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

export default function Header() {
  const setActive = ({ isActive }) => (isActive ? "active-link" : "");

  return (
    <div>
      <Box sx={{ marginBottom: "150px" }}>
        <AppBar position="static" sx={{ height: "90px" }}>
          <Toolbar
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography variant="h5">
                <NavLink to="/" className={setActive}>
                  Крутить!
                </NavLink>
              </Typography>
              <Typography variant="h5" sx={{ ml: 2, mr: 2, minWidth: "65px" }}>
                <NavLink to="/about" className={setActive}>
                  О нас
                </NavLink>
              </Typography>
              <Typography variant="h5">
                <NavLink to="/rules" className={setActive}>
                  Правила
                </NavLink>
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="h5"
                sx={{
                  color: "green",
                  pr: 1,
                  ml: 2,
                  borderRight: "1px solid black",
                }}
              >
                User12345
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "gold", ml: 1, mr: 2, minWidth: "190px" }}
              >
                Баланс: 999000р
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Button
                color="success"
                size="large"
                variant="contained"
                sx={{ minWidth: "215px" }}
              >
                Пополнить баланс
              </Button>
              <Button
                color="success"
                size="large"
                variant="contained"
                sx={{ ml: 2 }}
              >
                Войти
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
