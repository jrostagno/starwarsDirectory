import { Box } from "@mui/material";
import { ReactNode } from "react";
import styled from "@mui/material/styles/styled";
import Header from "../components/header/Header";
import SideBarNavigation, {
  SIDEBAR_WIDTH,
} from "../components/sidebar/SideBarNavigation";

interface Props {
  className?: string;
  children: ReactNode;
  contentRef?: React.RefObject<HTMLDivElement>;
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
    width: "100vw",
    padding: 0,
  };
});

export const SIDEBAR_MOBILE_WIDTH = 64;
export const HEADER_HEIGHT = 72;

const Content = styled(Box)(() => ({
  marginLeft: `${SIDEBAR_WIDTH}px`,
  marginTop: `${HEADER_HEIGHT}px`,
  width: `calc(100vw - ${SIDEBAR_WIDTH}px)`,
  height: `calc(100vh - ${HEADER_HEIGHT}px)`,
  overflowY: "auto",

  // [theme.breakpoints.down("md")]: {
  //   marginLeft: `${SIDEBAR_MOBILE_WIDTH}px`,
  //   width: `calc(100vw - ${SIDEBAR_MOBILE_WIDTH}px)`,
  // },
}));

const MainLayout = ({ children, className, contentRef }: Props) => {
  return (
    <MainLayoutContainerRoot>
      <Header />
      <SideBarNavigation />
      <Content
        ref={contentRef}
        component="main"
        className={className || ""}
        role="main"
        aria-label="Main Content"
      >
        {children}
      </Content>
    </MainLayoutContainerRoot>
  );
};

export default MainLayout;
