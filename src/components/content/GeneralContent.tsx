import React, { FunctionComponent } from "react";
import { SxProps } from "@mui/material/styles";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";

const Wrapper = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  height: "100%",
  width: "100%",
  minHeight: 800,
}));

interface ContentProps {
  className?: string;
  children?: React.ReactNode;
  sx?: SxProps;
}

const GeneralContent: FunctionComponent<ContentProps> = ({
  className,
  children,
}) => {
  return (
    // Adding a role and ARIA label to the Wrapper component
    <Wrapper
      component="article"
      className={className || ""}
      //  sx={{ ...sx }}
      role="main" // Role indicating this is the main content area
      aria-label="Main Content" // ARIA label for the main content area
    >
      {children}
    </Wrapper>
  );
};

export default GeneralContent;
