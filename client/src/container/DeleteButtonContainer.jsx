import React from 'react'
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: "10px",
        marginTop: "10px",
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

export const DeleteButtonContainer = ({ fetchFunc }) => {
    const style = useStyles()
    return (
        <>
            <Button className={style.root} variant='contained' color='primary' onClick={() => { fetchFunc() }}>delete</Button>
        </>
    )
}