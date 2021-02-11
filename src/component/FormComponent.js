import React from 'react'
import { useForm } from 'react-hook-form';
import { FormContainer } from '../container/FormContainer'
import { InputContainer } from "../container/InputContainer";

export const FormComponent = () => {
    const { register, handleSubmit } = useForm({
        mode: 'onBlur'
    });

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <InputContainer
                    ref={register}
                    id='firstName'
                    type='text'
                    label='First Name'
                    name='firstName' />
            </FormContainer>
        </>
    )
}


