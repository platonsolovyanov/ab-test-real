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

export const ButtonCalculateContainer = ({ users, installAppSevenDays, lastActivSevenDays }) => {
    const rollingRetentionSevenDays = (usersArr = users) => {
        if (users !== undefined && users.length !== 0) {
            const a = lastActivSevenDays(users)
            const b = installAppSevenDays(users)
            const s = a / b * 100
            return s
        }
        return 0
    }
    const style = useStyles()


    return (
        <>
            <Button onClick={() => { rollingRetentionSevenDays() }} className={style.root} variant='contained' color='primary'>Calculate</Button>
        </>
    )
}