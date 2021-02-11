import React from 'react'
import { useForm } from 'react-hook-form';
import { FormContainer } from '../container/FormContainer'
import { InputContainer } from "../container/InputContainer";
import { SendButtonComponent } from "./SendButtonComponent";

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
                    id='dateRegistration'
                    type='text'
                    label='Date Registration'
                    name='dateRegistration' />
                <InputContainer
                    ref={register}
                    id='dateLastActivity'
                    type='text'
                    label='Date Last Activity'
                    name='dateLastActivity' />
                <SendButtonComponent>Button</SendButtonComponent>
            </FormContainer>

        </>
    )
}


