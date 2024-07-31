import styled from "@mui/material/styles/styled";
import { Stack } from "@mui/material";
import SidebarButton from "./SideBarButton";
import { useNavigate } from "react-router-dom";

export const SIDEBAR_WIDTH = 200;
export const SIDEBAR_MOBILE_WIDTH = 64;

const SidebarWrapper = styled("nav")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  flexShrink: 0,
  minWidth: SIDEBAR_WIDTH,
  padding: theme.spacing(4, 2),
  backgroundColor: theme.palette.primary.dark,
  height: "100vh",
  flexGrow: 0,
  zIndex: 100000,
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  [theme.breakpoints.down("md")]: {
    minWidth: SIDEBAR_MOBILE_WIDTH,
    padding: theme.spacing(2),
  },
}));

interface SidebarProps {
  className?: string;
}

const SideBarNavigation = ({ className = "" }: SidebarProps) => {
  const navigate = useNavigate();
  const getSidebarButtonList = () => {
    return [
      {
        label: "People",
        path: "/people",
      },
      {
        label: "Planets",
        path: "/planets",
        disabled: location.pathname.startsWith("/step"),
      },
      {
        label: "Species",
        path: "/species",
      },
    ];
  };
  return (
    <SidebarWrapper className={className || ""} aria-label="Sidebar Navigation">
      <Stack gap={1}>
        {getSidebarButtonList().map((sidebarButton, index) => (
          <SidebarButton
            key={index}
            aria-label={sidebarButton.label}
            tooltipLabel={sidebarButton.label}
            active
            disabled={sidebarButton.disabled}
            onClick={() => {
              navigate(sidebarButton.path);
            }}
          >
            {sidebarButton.label}
          </SidebarButton>
        ))}
      </Stack>
    </SidebarWrapper>
  );
};

export default SideBarNavigation;
