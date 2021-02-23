import React from 'react'
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'


const useStyle = makeStyles({
    root: {
        fontFamily: 'Ubuntu',
        fontWeight: 300,
        fontSize: '14px',
        lineHeight: '16px',
        color: '#5D6D97',
    }
})

export const InputContainer = React.forwardRef((props, ref) => {
    const styles = useStyle()
    return (
        <TextField

            margin='normal'
            inputRef={ref}
            // variant='outlined'
            type="date"
            defaultValue={'2000-01-11'}
            // InputLabelProps={{
            //     shrink: true,
            // }}
            {...props}
        >
        </TextField>)
})