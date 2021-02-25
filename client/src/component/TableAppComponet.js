import React from 'react'
import { TableAppContainer } from "../container/TableAppContainer";
import { useSelector } from 'react-redux';


const columns = [
    { id: 'userId', label: 'UserId', minWidth: 50, align: 'left', },
    { id: 'dateRegistration', label: 'Date Registration', minWidth: 100, align: 'center', },
    {
        id: 'dateLastActivity',
        label: 'Date Last Activity',
        minWidth: 170,
        align: 'center',
    },
];

export const TableAppComponet = () => {
    const rows = useSelector(({ tableReducer }) => tableReducer.users)

    return (
        <>
            <TableAppContainer columns={columns} rows={rows} />
        </>
    )
}
