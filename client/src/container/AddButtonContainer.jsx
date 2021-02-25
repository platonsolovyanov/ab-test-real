import React from 'react'
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: '50px',
        background: "#4A9DFF",
        borderRadius: "10px",
        fontFamily: "Ubuntu",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "16px",
        color: "#FFFFFF",
    }
}))

export const SendButtonContainer = ({ children, props }) => {
    const styles = useStyles()

    return (
        <Button
            className={styles.root}
            type='submit'
            variant='contained'
            color='primary'
            {...props}>
            Add
            
        </Button>
    )
}