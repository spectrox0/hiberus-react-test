import React, {FC} from "react";
import { Spinner } from "../../atoms";
import {ScreenStyles} from "./styles";

type Props = {
    loading: boolean
}
export const ScreenLoading: FC<Props> = () => {
    return (
        <ScreenStyles>
            <Spinner/>
        </ScreenStyles>
    )

};