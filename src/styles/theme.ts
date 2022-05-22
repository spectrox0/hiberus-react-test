import { createTheme, responsiveFontSizes, ThemeOptions } from "@mui/material";
export const fontFamily = "SF Pro Display , serif";
const common: ThemeOptions = {
    spacing: (f: number): string => `${0.5 * f}rem`,
    components: {
        MuiTextField: {
            defaultProps: {
                variant: "standard",
                fullWidth: true,
            },
        },
        MuiCard: {
            defaultProps: {
                variant: "outlined",
            },
        },
        MuiPaper: {
            defaultProps: {
                variant: "outlined",
            },
            styleOverrides: {
                root: {
                    borderRadius: "10px",
                },
            },
        },
        MuiTable: {},
        MuiContainer: {
            defaultProps: {
                maxWidth: "lg",
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    typography: {
        fontFamily,
        h1: {
            fontSize: "1.5em",
            fontWeight: 700,
        },
        button: {
            fontSize: "1em",
        },
        h2: {
            fontSize: "1.8em",
            fontWeight: 400,
        },
        h3: {
            fontSize: "1.8em",
            fontWeight: 400,
        },
        h4: {
            fontSize: "1.2em",
        },
        htmlFontSize: 16,
        body1: {
            fontSize: "1em",
            fontWeight: 300,
        },
        body2: {
            fontSize: ".9em",
            fontWeight: 300,
        },
        subtitle1: {
            fontSize: "1.4em",
            fontWeight: 600,
        },
        subtitle2: {
            fontSize: "1.1em",
            fontWeight: 600,
        },
    },
};

let darkTheme = createTheme({
    ...common,
    palette: {
        mode: "dark",
        error: {
            main: "#CF6679",
        },
        success: {
            main: "#388e3c",
        },
        text: {
            primary: "#C2C9D6",
        },
        background: {
            default: "#1B1B1B",
        },
        primary: {
            main: "#0059c0",
            light: "rgba(0, 68, 154, 0.3)",
        },
        secondary: {
            main: "#252527",
            "500": "#252527",
        },
        divider: "rgba(255,255,255,0.1)",
    },
});

darkTheme = responsiveFontSizes(darkTheme);
export {darkTheme}
