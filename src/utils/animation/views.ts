import { MotionProps } from "framer-motion";

export const motionPropsTransitionViewOpacity: MotionProps = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};

export const motionPropsTransitionViewSwipe: MotionProps = {
    initial: { opacity: 0, x: "100%" },
    animate: {
        opacity: 1,
        x: "0",
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
    exit: {
        x: "-100%",
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

export const motionPropsLoadingScreen: MotionProps = {
    initial: { opacity: 1 },
    exit: {
        opacity: 0,
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    },
};
export const motionPropsCalendar: MotionProps = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        },
    },
};
export const motionPropsBackdrop: MotionProps = {
    initial: { opacity: 0 },
    animate: {
        opacity: 0.48,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};
export const motionPropsModal: MotionProps = {
    initial: { opacity: 0, x: "-50%", y: "100%" },
    animate: {
        opacity: 1,
        x: "-50%",
        y: "-50%",
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
    exit: {
        x: "-100%",
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};
