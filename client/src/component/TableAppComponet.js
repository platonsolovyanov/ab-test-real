import React from 'react'
import { useForm } from 'react-hook-form';
// import { addUser } from '../redux/TableApp/reduser'
import { TableAppContainer } from "../container/TableAppContainer";
import { useSelector } from 'react-redux';


const columns = [
    { id: 'userId', label: 'UserId', minWidth: 50, align: 'center', },
    { id: 'dateRegistration', label: 'Date Registration', minWidth: 100, align: 'center', },
    {
        id: 'dateLastActivity',
        label: 'Date Last Activity',
        minWidth: 170,
        align: 'center',
    },
];

export const TableAppComponet = () => {

    // const dispatch = useDispatch()
    const { inputDataValue, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        // dispatch(addUser({ userId: userId + 1, dateRegistration: d1, dateLastActivity: d2 }))
    }

    const rows = useSelector(({ rows }) => rows.users)

    return (
        <>
            <TableAppContainer handleSubmit={handleSubmit} inputDataValue={inputDataValue} onSubmit={onSubmit} columns={columns} rows={rows} />
        </>
    )
}
