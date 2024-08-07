import { PaletteColor, PaletteColorOptions, PaletteMode } from "@mui/material";
import "@mui/material/Button";
import { alpha } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles/createTheme";

// Alert
type AlertTypes = "filled" | "outlined" | "standard";
export const AlertType: AlertTypes = "filled";

// Button
type ButtonTypes = "text" | "outlined" | "contained";
export const buttonVariant: ButtonTypes = "contained";
const buttonFontSizeLarge = "14px";
const buttonPaddingLarge = "16px 24px";
const buttonFontSizeSmall = "14px";
const buttonPaddingSmall = "8px 12px";

// Inputs
type InputTypes = "standard" | "filled" | "outlined";
export const inputVariant: InputTypes = "standard";

export type InputSizeTypes = "small" | "medium" | undefined;
export const inputSize: InputSizeTypes = "medium";

declare module "@mui/material/styles" {
  interface CustomPalette {
    white: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module "@mui/material/styles" {
  interface Palette {
    customBackground: PaletteColor;
    hubspot: PaletteColor;
  }
  interface PaletteOptions {
    customBackground?: PaletteColorOptions;
    hubspot?: PaletteColorOptions;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}

// Colors
const primaryMain = "#1A5960";
const primaryDark = "#0F3940";
const primaryLight = "#62A6AF";
const contrastText = "#16181d";
const secondaryMain = "#02CFB0";
const secondaryDark = "#019B82";
const secondaryLight = "#AAF2E5";
const success = "#4CAF50";
const successDark = "#29822D";
const successLight = "#8FCC91";
const error = "#E53C3C";
const errorDark = "#9C3636";
const errorLight = "#FF8E8E";
const warning = "#FFC107";
const warningDark = "#E59000";
const warningLight = "#FFE082";
const textPrimary = "#1F3333";
const textSecondary = "#526666";
const textDisabled = "#B4BDBD";
const commonWhite = "#FFFFFF";
const hubspotColor = "#f95c35";

// Typography
const fontFamily = "DM Sans";
// const superFontSize = '48px';
const h1FontSize = "40px";
const h2FontSize = "32px";
const h2FontWeight = "600";
const h3FontSize = "24px";
const h3FontWeight = "600";
const h4FontSize = "20px";
const h5FontSize = "18px";
const h5FontWeight = "600";
const h6FontSize = "16px";
const h6FontWeight = "600";
const body1FontSize = "14px";
const body2FontSize = "12px";
const tooltipFontSize = "14px";
const tooltipFontWeight = "600";
const captionFontSize = "12px";
const linkFontSize = "14px";
const linkFontWeight = "600";

// Common
const borderRadius = "8px";

const darkModePalette = [
  {
    background: textPrimary,
    primaryText: commonWhite,
    secondaryText: "#E6E6E6",
    textDisabled: textDisabled,
    grey100: "#202124",
    grey300: "#42525e",
    paper: textSecondary,
    contrastBackground: "#333333",
    divider: "#16181d",
  },
];

const lightModePalette = [
  {
    background: commonWhite,
    primaryText: textPrimary,
    secondaryText: textSecondary,
    textDisabled: textDisabled,
    grey100: "#F9FBFC",
    grey300: "#E6E6E6",
    paper: "#F0F0F2",
    contrastBackground: "#F9FAFB",
    divider: "#E6E6E6",
  },
];

export const getPaletteMode = (mode: PaletteMode): Partial<ThemeOptions> => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          primary: {
            main: primaryMain,
            dark: primaryDark,
            light: primaryLight,
            contrastText: contrastText,
          },
          secondary: {
            main: secondaryMain,
            dark: secondaryDark,
            light: secondaryLight,
          },
          white: {
            main: commonWhite,
          },
          divider: darkModePalette[0].divider,
          text: {
            primary: darkModePalette[0].primaryText,
            secondary: darkModePalette[0].secondaryText,
            disabled: darkModePalette[0].textDisabled,
          },
          grey: {
            100: darkModePalette[0].grey100,
            300: darkModePalette[0].grey300,
          },
          success: {
            main: success,
            dark: successDark,
            light: successLight,
          },
          error: {
            main: error,
            dark: errorDark,
            light: errorLight,
          },
          warning: {
            main: warning,
            dark: warningDark,
            light: warningLight,
          },
          background: {
            default: darkModePalette[0].background,
            paper: darkModePalette[0].paper,
          },
          customBackground: {
            main: darkModePalette[0].contrastBackground,
          },
          hubspot: {
            main: hubspotColor,
          },
          originalBackground: {
            default: darkModePalette[0].background,
          },
          action: {
            hover: lightModePalette[0].grey300,
          },
        }
      : {
          primary: {
            main: primaryMain,
            dark: primaryDark,
            light: primaryLight,
            contrastText: contrastText,
          },
          secondary: {
            main: secondaryMain,
            dark: secondaryDark,
            light: secondaryLight,
          },
          white: {
            main: commonWhite,
          },
          divider: lightModePalette[0].divider,
          text: {
            primary: lightModePalette[0].primaryText,
            secondary: lightModePalette[0].secondaryText,
            disabled: darkModePalette[0].textDisabled,
          },
          grey: {
            100: lightModePalette[0].grey100,
            300: lightModePalette[0].grey300,
          },
          success: {
            main: success,
            dark: successDark,
            light: successLight,
          },
          error: {
            main: error,
            dark: errorDark,
            light: errorLight,
          },
          warning: {
            main: warning,
            dark: warningDark,
            light: warningLight,
          },
          background: {
            default: lightModePalette[0].background,
            paper: lightModePalette[0].paper,
          },
          customBackground: {
            main: lightModePalette[0].contrastBackground,
          },
          originalBackground: {
            default: lightModePalette[0].background,
          },
          action: {
            hover: lightModePalette[0].grey300,
          },
        }),
  },
});

export const CustomThemeOptions = (
  mode: PaletteMode
): Partial<ThemeOptions> => ({
  typography: {
    fontFamily: [
      fontFamily,
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: h1FontSize,
    },
    h2: {
      fontSize: h2FontSize,
      fontWeight: h2FontWeight,
    },
    h3: {
      fontSize: h3FontSize,
      fontWeight: h3FontWeight,
    },
    h4: {
      fontSize: h4FontSize,
    },
    h5: {
      fontSize: h5FontSize,
      fontWeight: h5FontWeight,
    },
    h6: {
      fontSize: h6FontSize,
      fontWeight: h6FontWeight,
    },
    body1: {
      fontSize: body1FontSize,
    },
    body2: {
      fontSize: body2FontSize,
    },
    caption: {
      fontSize: captionFontSize,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: primaryMain,
          boxShadow: "none",
          borderRadius: 0,
          border: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: `1px solid ${
            mode === "dark"
              ? darkModePalette[0].grey300
              : lightModePalette[0].grey300
          }`,
          borderRadius: borderRadius,
          backgroundColor:
            mode === "dark"
              ? darkModePalette[0].background
              : lightModePalette[0].background,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          fontWeight: "700",
          textTransform: "capitalize",
          borderRadius: borderRadius,
          padding: buttonPaddingLarge,
          fontSize: buttonFontSizeLarge,
          transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            color: commonWhite,
          },
        },
        {
          props: { variant: "text" },
          style: {
            color:
              mode === "dark"
                ? darkModePalette[0].primaryText
                : lightModePalette[0].primaryText,

            backgroundColor: alpha(
              mode === "dark"
                ? darkModePalette[0].primaryText
                : lightModePalette[0].primaryText,
              0
            ),
            "&:hover": {
              backgroundColor: alpha(
                mode === "dark"
                  ? darkModePalette[0].primaryText
                  : lightModePalette[0].primaryText,
                0.1
              ),
            },
            "&.border": {
              border: "1px solid",
              borderColor:
                mode === "dark"
                  ? darkModePalette[0].primaryText
                  : lightModePalette[0].primaryText,
            },
          },
        },
        {
          props: { variant: "contained", disabled: true },
          style: {
            color: textDisabled,
          },
        },
        {
          props: { variant: "contained", color: "primary" },
          style: {
            "&:hover": {
              backgroundColor: primaryLight,
            },
          },
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            color: commonWhite,
            "&:hover": {
              backgroundColor: secondaryDark,
            },
          },
        },
        {
          props: { variant: "contained", color: "error" },
          style: {
            color: commonWhite,
            backgroundColor: error,
            transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              color: errorDark,
              backgroundColor: alpha(error, 0.25),
            },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderWidth: 1,
            borderColor: primaryDark,
            color: primaryDark,
            "&:hover": {
              backgroundColor: alpha(primaryLight, 0.15),
            },
          },
        },
        {
          props: { size: "small" },
          style: {
            padding: buttonPaddingSmall,
            fontSize: buttonFontSizeSmall,
            lineHeight: "16px",
            maxHeight: "40px",
          },
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          outline: "none",
          "&:focus": {
            outline: "none",
          },
          "&:focus-visible": {
            outline: `2px solid ${primaryMain}`,
          },
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: primaryMain,
          fontSize: tooltipFontSize,
          fontWeight: tooltipFontWeight,
        },
        arrow: {
          color: primaryMain,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: h1FontSize,
        },
        h2: {
          fontSize: h2FontSize,
          fontWeight: h2FontWeight,
        },
        h3: {
          fontSize: h3FontSize,
          fontWeight: h3FontWeight,
        },
        h4: {
          fontSize: h4FontSize,
        },
        h5: {
          fontSize: h5FontSize,
          fontWeight: h5FontWeight,
        },
        body1: {
          fontSize: body1FontSize,
        },
        body2: {
          fontSize: body2FontSize,
        },
        caption: {
          fontSize: captionFontSize,
        },
      },
    },

    MuiListItemText: {
      styleOverrides: {
        root: {
          span: {
            fontWeight: 500,
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: borderRadius,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontSize: linkFontSize,
          fontWeight: linkFontWeight,
          color: primaryDark,
          cursor: "pointer",
          transition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            color: primaryMain,
          },
        },
      },
      variants: [
        {
          props: { variant: "caption" },
          style: {
            fontSize: captionFontSize,
          },
        },
        {
          props: { color: "secondary" },
          style: {
            color: secondaryMain,
            "&:hover": {
              color: secondaryDark,
            },
          },
        },
      ],
    },
  },
});
