import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { nutShow, nutUpdate, nutDelete } from '../../api/nut'
import NutDelete from './NutDelete'
import NutUpdate from './NutUpdate'

const NutShow = ({ user, msgAlert }) => {

    const [nut, setNut] = useState({})
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    const [deleted, setDeleted] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        nutShow(user, id)
            .then((res) => {
                setNut(res.data.nut)
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Show Nut Failure' + error,
                    variant: 'danger'
                })
            })
    }, [])

    const toggleShowUpdate = () => {
        setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
    }

    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current nut
        // then comma and modify the key to the value you need
        setNut({ ...nut, [event.target.name]: event.target.value })
    }

    const handleUpdateNut = () => {
        nutUpdate(nut, user, id)
            .then(() => {
                toggleShowUpdate()
                msgAlert({
                    heading: 'Success',
                    message: 'Updating Nut',
                    variant: 'success'
                })
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Update Nut Failure' + error,
                    variant: 'danger'
                })
            })
    }


    const handleDeleteNut = () => {
        nutDelete(user, id)
            .then(() => {
                setDeleted(true)
                msgAlert({
                    heading: 'Success',
                    message: 'Deleted Nut',
                    variant: 'success'
                })
            })
            .catch(error => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Delete Nut Failure' + error,
                    variant: 'danger'
                })
            })
    }

    
    if (deleted) {
        navigate('/nuts')
    }

    return (
        <div className='container-md mt-2'>
            <h3>{nut.name}</h3>
            <p>{nut.calories} calories per cup</p>
            <button className='btn btn-primary' onClick={toggleShowUpdate}>Edit</button>
            {isUpdateShown && (
                <NutUpdate
                    nut={nut}
                    handleChange={handleChange}
                    handleUpdateNut={handleUpdateNut}
                />
            )}
                <br />
                <NutDelete handleDeleteNut={handleDeleteNut}
                />
        </div>
    )
}




export default NutShow