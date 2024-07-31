import React, { FunctionComponent } from "react";

import { motion, useReducedMotion } from "framer-motion";

// Import useReducedMotion
import Box from "@mui/material/Box";

import { easing, styled } from "@mui/material/styles";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 194,
  height: 64,
  borderRadius: theme.shape.borderRadius,
  cursor: "pointer",
  backgroundColor: "transparent",
  transition: theme.transitions.create(["background-color"], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeInOut,
  }),
  [theme.breakpoints.down("md")]: {
    width: 32,
    height: 32,
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    "& .MuiSvgIcon-root": {
      color: theme.palette.secondary.main,
    },
  },
  "&.btn-active": {
    backgroundColor: theme.palette.secondary.main,
    "& .MuiSvgIcon-root": {
      color: theme.palette.primary.contrastText,
    },
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  "&.btn-disabled": {
    cursor: "default",
    pointerEvents: "none",
    "& .MuiSvgIcon-root": {
      color: theme.palette.text.secondary,
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  "& .MuiSvgIcon-root": {
    fontSize: 40,
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: 24,
    },
  },
}));

const StyledMotionWrapper = styled(motion.div)(({ theme }) => ({
  "&:focus-visible": {
    outline: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.shape.borderRadius,
  },
}));

interface SidebarButtonProps {
  className?: string;
  children?: React.ReactNode;
  tooltipLabel?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const SidebarButton: FunctionComponent<SidebarButtonProps> = ({
  className,
  children,
  active,
  disabled,
  onClick,
}) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      if (!disabled && onClick) {
        onClick();
      }
    }
  };

  const ariaRole = active ? "button" : "presentation";

  const shouldReduceMotion = useReducedMotion();

  return (
    <StyledMotionWrapper
      whileHover={shouldReduceMotion ? {} : { scale: active ? 1 : 1.05 }}
      whileTap={shouldReduceMotion ? {} : { scale: active ? 1 : 0.9 }}
      transition={shouldReduceMotion ? {} : { ...easing }}
      onKeyDown={handleKeyPress}
      tabIndex={disabled ? -1 : 0}
      role={ariaRole}
    >
      <Wrapper
        className={`${className || ""} ${active ? "btn-active" : ""} ${
          disabled ? "btn-disabled" : ""
        }`}
        onClick={disabled ? undefined : onClick}
        role={ariaRole}
      >
        {children}
      </Wrapper>
    </StyledMotionWrapper>
  );
};

export default SidebarButton;
