import { Theme } from "@mui/material";
import { GlobalStylesProps as StyledGlobalStylesProps } from "@mui/styled-engine/GlobalStyles/GlobalStyles";
import { darkTheme, fontFamily } from "./theme";

//@ts-ignore
export const globalStyles: StyledGlobalStylesProps<Theme>["styles"] = (
    theme
) => ({
    html: {
        minHeight: "100vh",
    },
    "*": {
        "&,&:after,&:before": {
            boxSizing: "border-box",
        },
    },

    body: {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
        margin: 0,
        fontFamily,
        minHeight: "100%",
        "-webkit-tap-highlight-color": "transparent",
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        textRendering: "optimizeLegibility",
        fontSize: "max(calc(0.85rem + 0.15vw), 1rem)",
        overflowX: "hidden",
        height: "100vh",
        overflowY: "auto",
        "&::-webkit-scrollbar-track": {
            border: "solid 1px transparent",
            backgroundColor: "transparent",
        },

        "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.text.primary,
            "&:hover,&:focus, &:active": {
                backgroundColor: theme.palette.primary.light,
            },
        },

        "&::-webkit-scrollbar": {
            width: "5px",
            backgroundColor: "transparent",
        },
    },
    input: {
        "&-webkit-autofill, &-webkit-autofill:focus": {
            boxShadow: `0 0 0 50px ${theme.palette.background.default} inset`,
            "-webkit-text-fill-color": theme.palette.text.primary,
        },
    },
    ":root": {
        "--toastify-color-light": "#fff",
        "--toastify-color-dark": darkTheme.palette.text,
        "--toastify-color-info": theme.palette.primary.main,
        "--toastify-color-success": theme.palette.primary.main,
        "--toastify-color-warning": theme.palette.warning.main,
        "--toastify-color-error": theme.palette.error.main,
        "--toastify-color-transparent": "rgba(255, 255, 255, 0.7)",

        "--toastify-icon-color-info": "var(--toastify-color-info)",
        "--toastify-icon-color-success": "var(--toastify-color-success)",
        "--toastify-icon-color-warning": "var(--toastify-color-warning)",
        "--toastify-icon-color-error": "var(--toastify-color-error)",

        "--toastify-toast-width": "320px",
        "--toastify-toast-background": "#fff",
        "--toastify-toast-min-height": "64px",
        "--toastify-toast-max-height": "800px",
        "--toastify-font-family": "sans-serif",
        "--toastify-z-index": 9999,

        "--toastify-text-color-light": darkTheme.palette.text,
        "--toastify-text-color-dark": darkTheme.palette.text,

        //Used only for colored theme
        "--toastify-text-color-info": theme.palette.text.primary,
        "--toastify-text-color-success": theme.palette.text.primary,
        "--toastify-text-color-warning": theme.palette.text.primary,
        "--toastify-text-color-error": theme.palette.text.primary,

        "--toastify-spinner-color": "#616161",
        "--toastify-spinner-color-empty-area": "#e0e0e0",

        // Used when no type is provided
        // toast("**hello**")
        "--toastify-color-progress-light": `linear-gradient(
  to right,
#4cd964,
#5ac8fa,
#007aff,
#34aadc,
#5856d6,
  #ff2d55
)`,
        // Used when no type is provided
        "--toastify-color-progress-dark": theme.palette.primary.main,
        "--toastify-color-progress-info": "var(--toastify-color-info)",
        "--toastify-color-progress-success": "var(--toastify-color-success)",
        "--toastify-color-progress-warning": "var(--toastify-color-warning)",
        "--toastify-color-progress-error": "var(--toastify-color-error)",
    },
});
