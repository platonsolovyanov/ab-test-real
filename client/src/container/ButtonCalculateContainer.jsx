import React from 'react'
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from 'react-redux';
import { calculate } from '../redux/Button/reduser'

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
    const dispatch = useDispatch()
    const rollingRetentionSevenDays = (usersArr = users) => {
        if (users !== undefined && users.length !== 0) {
            const last = lastActivSevenDays(users)
            const install = installAppSevenDays(users)
            const calc = last / install * 1
            return dispatch(calculate(calc))
        }
        return dispatch(calculate(0))
    }
    const style = useStyles()


    return (
        <>
            <Button onClick={() => { rollingRetentionSevenDays() }} className={style.root} variant='contained' color='primary'>Calculate</Button>
        </>
    )
}