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
import Logo from "../../assets/images/LogomarcaBranca.png";
import "./navbar.css";
import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const ResponsiveAppBar = () => {
  const history = useHistory();
  const { user } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        history.push("/");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AppBar className="app-bar" sx={{ background: "#88932a" }}>
      <Container maxWidth="xl" className="container">
        <Toolbar disableGutters>
          <img src={Logo} alt="Logomarca" className="logo" />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              className="icon-button"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
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
              }}
            >
              <a href="/home">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Início</Typography>
                </MenuItem>
              </a>
              <a href="/tips">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Itens recicláves</Typography>
                </MenuItem>
              </a>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Coleta</Typography>
              </MenuItem>
              <a href="/contact">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Contato</Typography>
                </MenuItem>
              </a>
              <a href="/maps">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Coleta</Typography>
                </MenuItem>
              </a>
              <a href="/score">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Pontuação</Typography>
                </MenuItem>
              </a>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <a href="/home">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Início
              </Button>
            </a>
            <a href="/tips">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Itens recicláves
              </Button>
            </a>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Coleta
            </Button>
            <a href="/contact">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Contato
              </Button>
            </a>
            <a href="/maps">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Coleta
              </Button>
            </a>
            <a href="/score">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Pontuação
              </Button>
            </a>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="user" src={user?.avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography onClick={handleSignOut} textAlign="center">
                  Sair
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
