import React from 'react'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<div className='container-md mt-3'>
			<h1 className='text-center'>Welcome to the Nutty API!</h1>
			<h4>Here you will find nothing but nuts. We've got good nuts, bad nuts, big nuts, small nuts... Hope we don't drive you nuts!</h4>
		</div>
	)
}

export default Home
