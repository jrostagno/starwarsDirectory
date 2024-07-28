import { Box } from "@mui/material";
import { ReactNode } from "react";
import styled from "@mui/material/styles/styled";
import Header from "../components/header/Header";

interface Props {
  children: ReactNode;
}

const mainLayoutContainerClasses = {
  name: "MainLayoutContainer",
  root: "MainLayoutContainer-root",
};

const MainLayoutContainerRoot = styled(Box, {
  name: mainLayoutContainerClasses.name,
  slot: "Root",
})(() => {
  return {
    width: "100%",
    padding: 0,
  };
});

export const SIDEBAR_WIDTH = 96;
export const SIDEBAR_MOBILE_WIDTH = 64;
export const HEADER_HEIGHT = 72;

const Content = styled(Box)(() => ({
  marginLeft: `${SIDEBAR_WIDTH}px`,
  marginTop: `${HEADER_HEIGHT}px`,
  width: `calc(100vw)`,
  height: `calc(100vh - ${HEADER_HEIGHT}px)`,
  overflowY: "auto",
  // [theme.breakpoints.down("md")]: {
  //   marginLeft: `${SIDEBAR_MOBILE_WIDTH}px`,
  //   width: `calc(100vw - ${SIDEBAR_MOBILE_WIDTH}px)`,
  // },
}));

const MainLayout = ({ children }: Props) => {
  return (
    <MainLayoutContainerRoot>
      <Header />
      <Content>{children}</Content>
      {/* <Footer /> */}
    </MainLayoutContainerRoot>
  );
};

export default MainLayout;
