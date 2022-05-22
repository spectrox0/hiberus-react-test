import {Box, BoxProps} from "@mui/material";
import React, {FC, PropsWithChildren} from "react";


export const CustomBox: FC<PropsWithChildren<BoxProps>> = ({
                                                               children,
                                                               borderRadius = "10px",
                                                               p = 3,
                                                               bgcolor = "secondary.main",
                                                               ...rest
                                                           }) => {
    return (
        <Box bgcolor={bgcolor} p={p} borderRadius={borderRadius} {...rest}>
            {children}
        </Box>
    );
};
