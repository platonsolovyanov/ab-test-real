import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TextField } from '@material-ui/core';
import { ButtonComponent } from '../component/ButtonComponent'

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
export const TableAppContainer = ({ rows, columns }) => {

    const classes = useStyles();

    return (
        <>
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

                                            const value = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`

                                            return (
                                                <TableCell className={classes.headerBodyText} key={column.id} align={column.align}>
                                                    {value}
                                                </TableCell>
                                                // <TextField defaultValue={value}> {value}</TextField>
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
        </>
    );
}

