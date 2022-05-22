import React, {FC} from "react";
import {ScreenStyles} from "./styles";
import {Spinner} from "../../atoms/Spinner";

export const ScreenLoading: FC = () => {
    return (
        <ScreenStyles>
            <Spinner/>
        </ScreenStyles>
    )

};