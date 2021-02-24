import React from 'react'
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "10px"
    }
}))

export const ButtonCalculateContainer = ({ fetchFunc }) => {
    const style = useStyles()

    const getRollingRetentionSevenDays = () => {
        fetch('http://localhost/get_rolling_seven_days', { method: 'GET' })
            .then(response => response.json())
            .then(res => console.log(res))
    }

    return (
        <>
            <Button onClick={() => getRollingRetentionSevenDays()} className={style.root} variant='contained' color='primary'>Calculate</Button>
        </>
    )
}