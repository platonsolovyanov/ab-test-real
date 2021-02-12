import React from 'react'
import { TableAppContainer } from "../container/TableAppContainer";
import { useDispatch, useSelector } from 'react-redux';

// const rows = [
//     // { userID: 1, dateRegistration: '12.12.20', population: '12.12.20' }
// ];

const columns = [
    { id: 'userID', label: 'UserID', minWidth: 50, align: 'left', },
    { id: 'dateRegistration', label: 'Date Registration', minWidth: 100, align: 'center', },
    {
        id: 'dateLastActivity',
        label: 'Date Last Activity',
        minWidth: 170,
        align: 'center',
    },
];

export const TableAppComponet = () => {
    const rows = useSelector(({ rows }) => rows.users)
    return (
        <>
            <TableAppContainer columns={columns} rows={rows} />
        </>
    )
}
