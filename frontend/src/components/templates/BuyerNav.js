import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const BuyerNavbar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>          
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={() => navigate("/buyer/Profile")}>
            Profile
          </Button>
          <Button color="inherit" onClick={() => navigate("/buyer/Search_bar")}>
            Search food Items
          </Button>
          <Button color="inherit" onClick={() => navigate("/buyer/Favourites")}>
            Favourites
          </Button>
          <Button color="inherit" onClick={()=> navigate("/buyer/Food_items")}>
            Food Items
          </Button>
          <Button color="inherit" onClick={()=> navigate("/buyer/Order")}>
            Order Items
          </Button>
          <Button color="inherit" onClick={()=> navigate("/buyer/Wallet")}>
            Wallet
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default BuyerNavbar;
