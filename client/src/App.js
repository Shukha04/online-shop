import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import Router from './components/Router'
import { check } from './http/user'
import { Context } from './index'

const App = observer(() => {
	const { user } = useContext(Context)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		check().then((data) => {
			user.setUser(true)
			user.setIsAuth(true)
		}).finally(() => setLoading(false))
	}, [])

	if (loading) {
		return <Spinner animation='grow' />
	}

	return (
		<BrowserRouter>
			<NavBar />
			<Router />
		</BrowserRouter>
	)
})

export default App
