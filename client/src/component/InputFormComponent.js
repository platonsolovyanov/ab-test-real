import React from 'react'
import { useForm } from 'react-hook-form';
import { addUser } from '../redux/TableApp/reduser'
import { useDispatch, useSelector } from 'react-redux';
import { InputFormContainer } from '../container/InputFormContainer'


export const InputFormComponent = () => {

    const dispatch = useDispatch()
    const userId = useSelector((data) => data.rows.users.length)
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
            <InputFormContainer onSubmit={onSubmit} handleSubmit={handleSubmit} register={register} />
        </>
    )
}

