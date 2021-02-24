import React from 'react'
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "10px"
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