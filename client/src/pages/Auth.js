import { observer } from 'mobx-react-lite'
import { useContext, useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { login, registration } from '../http/user'
import { Context } from '../index'

const Auth = observer(() => {
	const { user } = useContext(Context)
	const location = useLocation()
	const navigate = useNavigate()
	const isLogin = location.pathname === '/login'
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const click = async () => {
		try {

			let newUser
			if (isLogin) {
				newUser = await login(email, password)
			} else {
				newUser = await registration(email, password)
			}
			user.setUser(newUser)
			user.setIsAuth(true)
			navigate('/')
		} catch (err) {
			alert(err.response.data.message)
		}
	}

	return (
		<Container
			className='d-flex justify-content-center align-items-center'
			style={{ height: window.innerHeight - 56 }}
		>
			<Card style={{ width: 600 }} className='p-5'>
				<h2 className='m-auto'>{isLogin ? 'Authorization' : 'Registration'}</h2>
				<Form className='d-flex flex-column'>
					<Form.Control
						className='mt-3'
						placeholder='Enter your email...'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type='email'
					/>
					<Form.Control
						className='mt-3'
						placeholder='Enter your password...'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type='password'
					/>
					<div className='d-flex justify-content-between align-items-center mt-3 mx-0'>
						{isLogin
						 ? <div>Don't have any account? <Link to='/registration'>Register!</Link></div>
						 : <div>Do you have an account? <Link to='/login'>Log in!</Link></div>
						}
						<Button
							variant='outline-success'
							onClick={click}
						>
							{isLogin ? 'Log in' : 'Register'}
						</Button>
					</div>
				</Form>
			</Card>
		</Container>
	)
})

export default Auth
