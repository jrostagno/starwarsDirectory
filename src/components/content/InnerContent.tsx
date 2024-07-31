import React, { FunctionComponent } from "react";

import Box, { BoxProps } from "@mui/material/Box";
import { SxProps, Theme, styled } from "@mui/material/styles";
import { HEADER_HEIGHT } from "../header/Header";

export const SIDENAV_WIDTH = 200;
export const SIDENAV_MOBILE_WIDTH = 0;

const InnerContentWrapper = styled(Box)(({ theme }) => ({
  width: `calc(100% - ${SIDENAV_WIDTH}px)`,
  height: `calc(100vh - ${HEADER_HEIGHT}px)`,
  overflowY: "scroll",
  padding: theme.spacing(3),
  justifyContent: "flex-start",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    width: `calc(100% - ${SIDENAV_MOBILE_WIDTH}px)`,
    marginLeft: SIDENAV_MOBILE_WIDTH,
    padding: theme.spacing(2, 3),
  },
}));

interface InnerContentProps extends BoxProps {
  overflowY?: string;
  className?: string;
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

const InnerContent: FunctionComponent<InnerContentProps> = ({
  overflowY,
  className,
  children,
  sx,
  ...props
}) => {
  return (
    <InnerContentWrapper
      className={className || ""}
      component="section"
      sx={{
        ...sx,
        overflow: overflowY,
      }}
      {...props}
      role="main"
      aria-label="Inner Content"
    >
      {children}
    </InnerContentWrapper>
  );
};

export default InnerContent;
