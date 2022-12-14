import React from 'react'

const NutUpdate = ({ nut, handleChange, handleUpdateNut }) => {
	return (
		<>
			<input 
            type='text' 
            value={nut.name} 
            name='name' 
            onChange={handleChange} 
            />
			<input 
            type='number' 
            value={nut.calories} 
            name='calories' 
            onChange={handleChange} 
            />
			<button className='btn btn-success' onClick={handleUpdateNut}>Confirm</button>
		</>
	)
}

export default NutUpdate