import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import { TextField } from '@material-ui/core';

const Input = withStyles({
    root: {
        width: '70px',
        ".MuiInputBase-input": {
            width: '70px'
        }
    }
})(TextField);

export const InputRefComponent = React.forwardRef((props, ref) => {
    const value = props.value
    return (
        <>
            <Input defaultValue={value} type="date" inputRef={ref} />
        </>
    )
})