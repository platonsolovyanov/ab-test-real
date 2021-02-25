import React from 'react'
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'


const useStyle = makeStyles({
    root: {
        marginLeft: "30px",
    }
})

export const InputContainer = React.forwardRef((props, ref) => {
    const styles = useStyle()
    return (
        <TextField
            className={styles.root}
            margin='normal'
            inputRef={ref}
            variant='outlined'
            type="date"
            defaultValue={'2021-02-24'}
            {...props}
        >
        </TextField>)
})