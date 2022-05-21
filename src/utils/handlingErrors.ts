import {showError} from "./message";

const errors: { [key: number]: string } = {
    [404]: "User email not found or password invalid",
    [601]: "User is not validated"
}

export const error = (statusCode: number) => {
    showError(errors[statusCode])
}