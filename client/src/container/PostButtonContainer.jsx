import React from 'react'
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "10px"
    }
}))

export const PostButtonContainer = ({ fetchFunc }) => {
    const style = useStyles()
    return (
        <div>
            <Button className={style.root} variant='contained' color='primary' onClick={() => { fetchFunc() }}>button</Button>
        </div>
    )
}
