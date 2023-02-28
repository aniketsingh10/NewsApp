import { AppBar, Toolbar, styled } from "@mui/material";
import { Menu } from "@mui/icons-material";
import {Link} from "@mui/material";
const StyledApp = styled(AppBar)`
  background: #000;
  height: 70px;
  position: sticky;
  z-index: 1000;
  top:0;
`;

const MenuIcon = styled(Menu)`
  color: #fff;
`;

const Header = () => {
  
  return (
    <StyledApp position="relative">
      <Toolbar>
        <MenuIcon />
        <h2 style={{ margin: "auto", paddingTop: "10px" }}>
          Welcome to NewsApp
        </h2>
        <Link style={{ textAlign: "right", color:"#fff", height:"20px" }} href="https://github.com/aniketsingh10/NewsApp" target="_blank"> About </Link>
        
      </Toolbar>
    </StyledApp>
  );
};

export default Header;
