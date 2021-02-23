import React from 'react'
import { FormComponent } from '../component/FormComponent'
import { InputContainer } from "./InputContainer";
import { makeStyles } from "@material-ui/core/styles";
import { SendButtonComponent } from "../component/SendButtonComponent";

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export const InputFormContainer = ({ handleSubmit, onSubmit, register }) => {
    const styles = useStyles()
    return (
        <>
            <FormComponent className={styles.root} onSubmit={handleSubmit(onSubmit)}>
                <InputContainer
                    ref={register}
                    id='dateRegistration'
                    label='Date Registration'
                    name='dateRegistration' />
                <InputContainer
                    ref={register}
                    id='dateLastActivity'
                    label='Date Last Activity'
                    name='dateLastActivity' />
                <SendButtonComponent />
            </FormComponent>
        </>
    )
}
