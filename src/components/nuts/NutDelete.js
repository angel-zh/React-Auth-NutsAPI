import React from 'react'



const NutDelete = ({ handleDeleteNut }) => {
 
   
    return (
        <>
            <button className='btn btn-danger' onClick={handleDeleteNut}>Delete</button>
        </>
    )
}

export default NutDelete