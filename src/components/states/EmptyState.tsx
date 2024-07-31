import React, { FunctionComponent } from "react";

import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

interface EmptyStateProps {
  className?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  status?: boolean;
  hasLoading?: boolean;
}

const EmptyState: FunctionComponent<EmptyStateProps> = ({
  className,
  title,
  subtitle,
  children,
  icon,
  status,
  hasLoading,
}) => {
  return (
    <Wrapper className={className || ""}>
      {status && hasLoading ? (
        <CircularProgress size={50} />
      ) : (
        <>
          {icon ? <div className="empty-state-icon-wrapper">{icon}</div> : null}
          <div className="empty-state-header">
            <Typography
              variant="h4"
              fontWeight={700}
              gutterBottom
              className={!subtitle && !children ? "title-padding" : ""}
            >
              {title}
            </Typography>
            {subtitle && (
              <Typography
                variant="body1"
                sx={{ opacity: 0.8, textWrap: "balance" }}
              >
                {subtitle}
              </Typography>
            )}
          </div>
          {children && <div className="empty-state-content">{children}</div>}
        </>
      )}
    </Wrapper>
  );
};

export default EmptyState;

const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "250px",
  maxHeight: "calc(100dvh - 158px)",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  isolation: "isolate",
  zIndex: 1,
  "&:before": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundPosition: "center center",
    backgroundSize: theme.spacing(5, 5),
    backgroundImage: `linear-gradient(to right, ${theme.palette.text.primary} 1px, transparent 1px), linear-gradient(to bottom, ${theme.palette.text.primary} 1px, transparent 1px)`,
    zIndex: 0,
    mask: `radial-gradient(circle at 50% 50%, ${theme.palette.text.primary} 0%, transparent 45%)`,
    opacity: 0.25,
  },
  "& .title-padding": {
    paddingBlockEnd: theme.spacing(2),
  },
  "& .empty-state-content": {
    marginTop: theme.spacing(2),
  },
  "& .empty-state-header, & .empty-state-content": {
    zIndex: 1,
  },
  "& .empty-state-header": {
    width: "minmax(25vw, 85vw)",
    [theme.breakpoints.up("lg")]: {
      width: "25vw",
    },
  },
  "& .empty-state-icon-wrapper": {
    zIndex: 1,
    height: 64,
    marginBlockEnd: theme.spacing(2),
    "& svg": {
      color: theme.palette.text.primary,
      fontSize: 64,
    },
  },
}));
