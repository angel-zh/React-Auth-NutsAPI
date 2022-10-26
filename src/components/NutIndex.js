import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { nutIndex } from '../api/nut'

const NutIndex = ({ user, msgAlert }) => {

    const [allNuts, setAllNuts] = useState([])

    useEffect(() => {
        nutIndex(user)
            .then(res => {
                setAllNuts(res.data.nuts)
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Index Nuts Failure' + error,
                    variant: 'danger'
                })
            })
    }, [])

    const allNutsJSX = allNuts.map(nut => {
        return (
            <div className='container-md mt-2'>
                <Link to={nut._id} key={nut._id}>
                    <li>{nut.name}: {nut.calories} calories per cup</li>
                </Link>
            </div>
        )
    })

    return (
        <>
            <h1 className='container-md mt-2'>List of All Nuts</h1>
            <ul>{allNutsJSX}</ul>
        </>
    )
}

export default NutIndex