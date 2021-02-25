import React from 'react'
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
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

export const PostButtonContainer = ({ fetchFunc }) => {
    const style = useStyles()

    return (
        <div>
            <Button className={style.root} variant='contained' color='primary' onClick={() => { fetchFunc() }}>Save</Button>
        </div>
    )
}
