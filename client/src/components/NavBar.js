import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { Context } from '../index'

const NavBar = observer(() => {
	const navigate = useNavigate()
	const { user } = useContext(Context)

	const logOut = () => {
		user.setUser({})
		user.setIsAuth(false)
		localStorage.removeItem('token')
	}

	return (
		<Navbar bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand as={NavLink} to='/'>BuyMe</Navbar.Brand>
				<Nav className='ms-auto'>
					{user.isAuth
					 ? <>
						 <Button variant='outline-light' onClick={() => navigate('/admin')} className='ms-2'>Admin panel</Button>
						 <Button
							 variant='outline-light'
							 className='ms-2'
							 onClick={logOut}
						 >
							 Logout
						 </Button>
					 </>
					 : <>
						 <Button variant='outline-light' onClick={() => navigate('/login')} className='ms-2'>Auth</Button>
					 </>
					}

				</Nav>
			</Container>
		</Navbar>
	)
})

export default NavBar