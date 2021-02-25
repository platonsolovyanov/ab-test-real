import React from 'react'
import { ButtonCalculateContainer } from '../container/ButtonCalculateContainer'
import { useSelector } from 'react-redux';



export const ButtonCalculateComponent = () => {

    const users = useSelector(({ tableReducer }) => tableReducer.users)


    const funcSevenDaysAgo = () => {
        const date = new Date();
        date.setDate(date.getDate() - 7);
        const finalDate = `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}`;

        return finalDate
    }
    const installAppSevenDays = (arr) => {
        const weekAgo = new Date(funcSevenDaysAgo())
        let count = 0
        arr.forEach((el) => {
            const dateLastActivity = new Date(el.dateRegistration)
            if (dateLastActivity >= weekAgo) {
                ++count
            }
        })
        return count
    }

    const lastActivSevenDays = (arr) => {
        const weekAgo = new Date(funcSevenDaysAgo())
        let count = 0
        arr.forEach((el) => {
            const dateLastActivity = new Date(el.dateLastActivity)
            if (dateLastActivity <= weekAgo) {
                ++count
            }
        })
        return count
    }

    return (
        <div>
            <ButtonCalculateContainer users={users} installAppSevenDays={installAppSevenDays} lastActivSevenDays={lastActivSevenDays} />
        </div>
    )
}
