import {FC} from "react";
import {ToastContainer, ToastContainerProps} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = ToastContainerProps;
export const Notification: FC<Props> = ({
                                            position = "bottom-right",
                                            autoClose = 5000,
                                            closeOnClick = true,
                                            hideProgressBar = false,
                                            newestOnTop = false,
                                            rtl = false,
                                            draggable = false,
                                            pauseOnFocusLoss = true,
                                            pauseOnHover = true,
                                            ...rest
                                        }) => {
    return (
        <ToastContainer
            position={position}
            theme={'dark'}
            autoClose={autoClose}
            hideProgressBar={hideProgressBar}
            newestOnTop={newestOnTop}
            closeOnClick={closeOnClick}
            rtl={rtl}
            pauseOnFocusLoss={pauseOnFocusLoss}
            draggable={draggable}
            pauseOnHover={pauseOnHover}
            {...rest}
        />
    );
};
