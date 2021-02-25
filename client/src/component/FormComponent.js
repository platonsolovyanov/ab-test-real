import React from 'react'
import { useForm } from 'react-hook-form';
import { FormContainer } from '../container/FormContainer'
import { InputComponent } from "../component/InputComponent";
import { AddButtonComponent } from "./AddButtonComponent";
import { makeStyles } from "@material-ui/core/styles";
import { addUser } from '../redux/TableApp/reduser'
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
    const userId = useSelector((data) => data.tableReducer.users.length)
    const { register, handleSubmit } = useForm({
        mode: 'onBlur'
    });

    const validDate = (date) => {

        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }

    const onSubmit = (data) => {
        const dateReg = new Date(data.dateRegistration);
        const d1 = validDate(dateReg)
        const dateLast = new Date(data.dateLastActivity);
        const d2 = validDate(dateLast)

        dispatch(addUser({ userId: userId + 1, dateRegistration: d1, dateLastActivity: d2 }))
    }
    return (
        <>
            <FormContainer className={styles.root} onSubmit={handleSubmit(onSubmit)}>
                <InputComponent
                    ref={register}
                    id='dateRegistration'
                    label='Date Registration'
                    name='dateRegistration' />
                <InputComponent
                    ref={register}
                    id='dateLastActivity'
                    label='Date Last Activity'
                    name='dateLastActivity' />
                <AddButtonComponent />
            </FormContainer>

        </>
    )
}


