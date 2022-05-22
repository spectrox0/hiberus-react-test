import { motion } from "framer-motion";
import { Breakpoint, styled } from "@mui/material";

export const ModalStyles = styled(motion.div)<{
    size: Breakpoint;
    width?: string;
    padding?: string;
}>(({ theme, padding, width, size }) => ({
    padding: padding ? padding : "0.8rem",
    position: "relative",
    top: "50%",
    left: "50%",
    overflowY: "auto",
    overflowX: "hidden",
    transformOrigin: "center",
    transform: "translate3d(-50%, -50%, 0)",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    maxWidth: width || `${theme.breakpoints.values[size] + "px"}`,
    zIndex: 1,
    width: "inherit",
    borderRadius: "10px",
    maxHeight: "calc(80vh - 2rem)",
    ".title": {
        letterSpacing: "0.013em",
        fontSize: "1.3em",
        fontWeight: "500",
    },
    ".close": {
        position: "absolute",
        right: 0,
        color: theme.palette.primary.main,
    },
}));
