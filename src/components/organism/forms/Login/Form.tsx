import {Form as FormikForm, FormikProps} from "formik";
import React, {FC} from "react";
import {LoginFormValues} from "./index";
import {useAppSelector} from "../../../../store/selector";
import {Btn, Input} from "../../../atoms";

export const Form: FC<FormikProps<LoginFormValues>> = ({
                                                           values: {email, password},
                                                           handleChange,
                                                           touched,
                                                           errors,
                                                           handleBlur,
                                                           isValid
                                                       }) => {
    const {loading} = useAppSelector(state => state.auth)

    return (
        <FormikForm>
            <Input error={(touched.email && errors.email) || ""}
                   fullWidth
                   value={email}
                   label={'email'}
                   name={'email'}
                   onChange={handleChange}
                   onBlur={handleBlur}/>
            <Input error={(touched.password && errors.password) || ""}
                   fullWidth
                   value={password}
                   label={'password'}
                   name={'password'}
                   onChange={handleChange}
                   onBlur={handleBlur}/>


            <Btn fullWidth type={'submit'} disabled={!isValid || loading}>
                Submit
            </Btn>
        </FormikForm>
    )
}