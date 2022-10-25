import React, { useState } from 'react'
import { nutCreate } from '../api/nut'


const NutCreate = ({ user, msgAlert }) => {
    const defaultNut = {
        name: '',
        type: ''
    }
    
    const [nut, setNut] = useState(defaultNut)

    const handleChange = event => {
        // to keep the values as users input info
        // first, spread the current nut, then comma and modify the key to the value you need
        setNut({ ...nut, [event.target.name]: event.target.value })
    }

    const handleCreateNut = () => {
        nutCreate(nut, user)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Created Nut',
                variant: 'success'
            })
        })
        .catch(error => {
            msgAlert({
                heading: 'Failure',
                message: 'Create Nut Failure' + error,
                variant: 'danger'
            })
        })
    }

    return (
        <>
            <input 
                type='text'
                value={nut.name}
                name='name'
                onChange={handleChange}
            />
            <input 
                type='text'
                value={nut.type}
                name='type'
                onChange={handleChange}
            />
            <button onClick={handleCreateNut}>Create Nut</button>
        </>
    )
}


export default NutCreate