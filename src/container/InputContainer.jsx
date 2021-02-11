import React from 'react'
import { TextField } from '@material-ui/core';

export const InputContainer = React.forwardRef((props, ref) => {
    return (
        <TextField
            margin='normal'
            inputRef={ref}
            // variant='outlined'
            fullWidth
            {...props}></TextField>)
})