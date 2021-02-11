import React from 'react'
import { TableAppContainer } from "../container/TableAppContainer";

const rows = [
    createData(1, '12.12.20', 1324171354),
    createData(2, '12.12.20', 1403500365),
    createData(3, '12.12.20', 60483973),
    createData(4, '12.12.20', 327167434,),
    createData(5, '12.12.20', 1324171354),
    createData(6, '12.12.20', 1403500365),
    createData(7, '12.12.20', 60483973),
    createData(8, '12.12.20', 327167434,),
    createData(9, '12.12.20', 1324171354),
    createData(10, '12.12.20', 1403500365),
    createData(11, '12.12.20', 60483973),
    createData(12, '12.12.20', 327167434,),
    createData(13, '12.12.20', 1324171354),
    createData(14, '12.12.20', 1403500365),
    createData(15, '12.12.20', 60483973),
    createData(16, '12.12.20', 327167434,),
    createData(17, '12.12.20', 1324171354),
    createData(18, '12.12.20', 1403500365),
    createData(19, '12.12.20', 60483973),
    createData(20, '12.12.20', 327167434,),
    createData(21, '12.12.20', 1324171354),
    createData(22, '12.12.20', 1403500365),
    createData(23, '12.12.20', 60483973),
    createData(24, '12.12.20', 327167434,),
    createData(25, '12.12.20', 1324171354),
    createData(26, '12.12.20', 1403500365),
    createData(27, '12.12.20', 60483973),
    createData(28, '12.12.20', 327167434,),
    createData(29, '12.12.20', 1324171354),
    createData(30, '12.12.20', 1403500365),
    createData(31, '12.12.20', 60483973),
    createData(32, '12.12.20', 327167434,),
    createData(33, '12.12.20', 1324171354),
    createData(34, '12.12.20', 1403500365),
    createData(35, '12.12.20', 60483973),
    createData(36, '12.12.20', 327167434,),
    createData(37, '12.12.20', 1324171354),
    createData(38, '12.12.20', 1403500365),
    createData(39, '12.12.20', 60483973),
    createData(40, '12.12.20', 327167434,),
];

const columns = [
    { id: 'userID', label: 'UserID', minWidth: 50, align: 'left', },
    { id: 'dateRegistration', label: 'Date Registration', minWidth: 100, align: 'center', },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'center',
    },
];

function createData(userID, dateRegistration, population) {
    return { userID, dateRegistration, population };
}

export const TableAppComponet = () => {
    return (
        <>
            <TableAppContainer columns={columns} rows={rows} />
        </>
    )
}
