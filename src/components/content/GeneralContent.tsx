import React, { FunctionComponent } from "react";
import { SxProps } from "@mui/material/styles";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import { SIDEBAR_WIDTH } from "../sidebar/SideBarNavigation";

const Wrapper = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  height: "100%",
  width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
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
    <Wrapper
      component="article"
      className={className || ""}
      aria-label="Main Content"
    >
      {children}
    </Wrapper>
  );
};

export default GeneralContent;
