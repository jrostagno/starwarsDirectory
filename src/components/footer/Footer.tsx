import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      role="banner"
      sx={{
        width: "100%",
        height: 100,
        background: "red",
        position: "fixed",
        bottom: 0,
      }}
    >
      <Box sx={{ height: 100, background: "red" }}></Box>
    </Box>
  );
};

export default Footer;
