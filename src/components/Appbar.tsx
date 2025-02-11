import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Appbar() {

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'white'}}>
      <AppBar position="fixed">
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Frumoš sklad
          </Typography>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2196f3", 
                color: "white", 
                "&:hover": {
                  backgroundColor: "#1976d2"
                },
              }}
            >
              Přihlásit se
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <div className="welcome-container">
        <img src="logo-frumos.png" alt="Welcome Image" className="welcome-image" />
      </div>
    </Box>
  );
}
