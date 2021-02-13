import React from 'react'
import { useForm } from 'react-hook-form';
import { FormContainer } from '../container/FormContainer'
import { InputContainer } from "../container/InputContainer";
import { SendButtonComponent } from "./SendButtonComponent";
import { makeStyles } from "@material-ui/core/styles";
import { addUser, deleteUser } from '../redux/TableApp/reduser'
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export const FormComponent = () => {
    const styles = useStyles()

    const dispatch = useDispatch()
    const userId = useSelector((data) => data.rows.users.length)
    const { register, handleSubmit } = useForm({
        mode: 'onBlur'
    });

    const onSubmit = (data) => {
        dispatch(addUser({ userID: userId + 1, dateRegistration: data.dateRegistration, dateLastActivity: data.dateLastActivity }))
    }
    return (
        <>
            <FormContainer className={styles.root} onSubmit={handleSubmit(onSubmit)}>
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
                <SendButtonComponent>Button</SendButtonComponent>
            </FormContainer>

        </>
    )
}


