import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({ user }) => {
	const navigate = useNavigate()

	React.useEffect(() => {
		if(user) {
			navigate('/nuts')
		}
	})
	
	return (
		<div className='container-md mt-3 text-center'>
			<h1>Welcome to the Nutty API!</h1>
			<h4>Here you will find nothing but nuts. We've got good nuts, bad nuts, big nuts, small nuts... <br/>Hope we don't drive you nuts!</h4>
			<p>Sign up or log in for full access.</p>
		</div>
	)
}

export default Home
