import React from "react";

export const FormContainer = ({ children, ...props }) => {
    return <form noValidate {...props}>{children}</form>
}