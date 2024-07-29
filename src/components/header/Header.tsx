import { AppBar, Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import styled from "@mui/material/styles/styled";

interface Props {
  className?: string;
}

export const HEADER_HEIGHT = 72;

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  gap: 2,
  minHeight: HEADER_HEIGHT,
  [theme.breakpoints.up("sm")]: {
    minHeight: HEADER_HEIGHT,
  },
}));

const Header = ({ className }: Props) => {
  return (
    <Box role="banner" className={className || ""}>
      <AppBar position="fixed" style={{ flexGrow: 1 }}>
        <StyledToolbar>
          <Box sx={{ height: "auto", background: "red" }}></Box>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
