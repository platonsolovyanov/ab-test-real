import React from 'react'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { makeStyles, withStyles } from "@material-ui/core/styles";
import { ButtonComponent } from '../component/ButtonComponent'
import InputBase from "@material-ui/core/InputBase";
import { FormComponent } from '../component/FormComponent'
import { TextField } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: "770px",
        background: "#ffffff",
        boxShadow: "4px 0px 10px rgba(93, 109, 151, 0.1)",
        borderRadius: '10px',
    },
    tableHeaderText: {
        fontFamily: "Ubuntu",
        fontWeight: 400,
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "16px",
        color: "#5D6D97",

    },
    headerBodyText: {
        fontFamily: 'Ubuntu',
        fontWeight: 300,
        fontSize: '14px',
        lineHeight: '16px',
        color: '#5D6D97',
    },
    headerTableRow: {
        "&:last-child": {
            borderRadius: '10px',
        }
    }
});
const Input = withStyles({
    root: {
        width: '70px',
        ".MuiInputBase-input": {
            width: '70px'
        }
    }
})(TextField);

{/* <TextField */ }

// margin='normal'
// inputRef={ref}
// variant='outlined'
// type="date"

// InputLabelProps={{
//     shrink: true,
// }}
// {...props}
{/* >
</TextField> */}

// const Input = withStyles({
//     root: {
//         width: '70px',
//         ".MuiInputBase-input": {
//             width: '70px'
//         }
//     }
// })(InputBase);






export const TableAppContainer = ({ handleSubmit, inputDataValue, onSubmit, rows, columns }) => {

    const classes = useStyles();

    const fined = (value) => {

    }

    const aaaa = (d) => {

        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const day = d.getDate();



        console.log(`${month}`.length == 1)

        if (`${month}`.length == 1) {
            const value = `${year}-0${month + 1}-${day}`
            // console.log(value)
            console.log('asdasd')
            return value
        } else {
            const value = `${year}-${month + 1}-${day}`
            console.log(value)
            return value
        }
        // let value
        // month.length == 1 ? value = `${year}-0${month + 1}-${day}` : value = `${year}-${month + 1}-${day}`
        // console.log(value)
    }

    return (
        <>
            <FormComponent onSubmit={handleSubmit(onSubmit)}>
                <Paper >
                    <Table className={classes.root} stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow >
                                {columns.map((column) => (
                                    <TableCell
                                        className={classes.tableHeaderText}
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            if (column.id != 'userId') {

                                                const d = new Date(row[column.id])
                                                const value = aaaa(d)
                                                // console.log(value)
                                                // const year = d.getFullYear();
                                                // const month = d.getMonth() + 1;
                                                // const day = d.getDate();

                                                // if (month.length < 2) {
                                                //     const value = `${d.getFullYear()}-0${d.getMonth() + 1}-${d.getDate()}`
                                                //     return value
                                                // } else {
                                                //     const value = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
                                                //     return value
                                                // }
                                                // let value
                                                // month.length < 2 ? value = `${d.getFullYear()}-0${d.getMonth() + 1}-${d.getDate()}` : value = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
                                                // const value = `${d.getFullYear()}-0${d.getMonth() + 1}-${d.getDate()}`

                                                return (
                                                    <TableCell className={classes.headerBodyText} key={column.id} align={column.align}>
                                                        {/* <Input name="date" ref={inputDataValue} width={'10px'} className={classes.tableHeaderText} defaultValue={value}></Input> */}
                                                        <TextField name="date" width={'10px'} className={classes.tableHeaderText} ref={inputDataValue} defaultValue={value} type="date"></TextField>
                                                        {/* <Inout1 value={value} inputDataValue={inputDataValue}></Inout1> */}
                                                    </TableCell>
                                                )
                                            } else {

                                                const value = row[column.id]

                                                return (
                                                    <TableCell className={classes.headerBodyText} key={column.id} align={column.align}>
                                                        {value}
                                                    </TableCell>
                                                )
                                            }
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
                <ButtonComponent />
            </FormComponent>
        </>
    );
}

