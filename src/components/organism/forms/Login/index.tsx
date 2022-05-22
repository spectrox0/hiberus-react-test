import * as React from 'react'
import {Formik} from 'formik'
import {useDispatch} from "react-redux";
import {RegPassword} from "../../../../utils/password";
import * as yup from 'yup'
import {login} from "../../../../store/actions/auth";
import {Form} from "./Form";
import {LoginPayload} from "../../../../services/types/auth";


const initialValues: LoginPayload = {
    email: "",
    password: "",
}
export type LoginFormValues = typeof initialValues;
export const LoginForm = () => {
    const dispatch = useDispatch();
    return <Formik
        validateOnMount
        onSubmit={async ({password, email}, {resetForm}) => {
            dispatch(
                login({
                    password,
                    email
                })
            );
            resetForm()
        }}
        initialValues={initialValues}
        validationSchema={yup.object().shape({
            password: yup
                .string()
                .matches(
                    RegPassword
                    // "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                )
                .required("is required"),
            confirmPassword: yup
                .string()
                .required("is required")
                .oneOf([yup.ref("password"), null], "password must match"),

            email: yup.string().email().required("is required")
        })}
    >
        {(props) => (
            <Form {...props}/>)}
    </Formik>
}