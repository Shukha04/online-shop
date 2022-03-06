import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Context } from '../index'
import { privateRoutes, publicRoutes } from '../routes'

const Router = () => {
	const { user } = useContext(Context)

	return (
		<Routes>
			{user.isAuth && privateRoutes.map((route) => {
				return <Route {...route} exact key={route.path} />
			})}
			{publicRoutes.map((route) => <Route {...route} exact key={route.path} />)}
			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	)
}

export default Router
