import React, { useState } from 'react'
import { nutCreate } from '../../api/nut'
import { useNavigate } from 'react-router-dom'


const NutCreate = ({ user, msgAlert }) => {
    const defaultNut = {
        name: '',
        type: ''
    }

    const [nut, setNut] = useState(defaultNut)
    const navigate = useNavigate()

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
            .then(navigate('/nuts'))
            .catch(error => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Create Nut Failure' + error,
                    variant: 'danger'
                })
            })
    }

    return (
        <div className='container-md mt-2'>
            <h1>Add a Nut</h1>
            <label>Name: </label>
            <input
                type='text'
                value={nut.name}
                name='name'
                placeholder='name of nut'
                onChange={handleChange}
            /><br />
            <label>Calories: </label>
            <input
                type='number'
                value={nut.calories}
                name='calories'
                placeholder='calories per cup'
                onChange={handleChange}
            /><br />
            <button className='btn btn-success' onClick={handleCreateNut}>Create Nut</button>
        </div>
    )
}


export default NutCreate