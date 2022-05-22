import React, {FC, PropsWithChildren} from "react";
import {Button, ButtonProps} from '@mui/material'

export const Btn: FC<PropsWithChildren<ButtonProps>> = ({children, ...rest}) => {
    return (
        <Button {...rest}>
            {children}
        </Button>
    )
}