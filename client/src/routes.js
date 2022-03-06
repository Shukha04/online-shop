import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Basket from './pages/Basket'
import Device from './pages/Device'
import Shop from './pages/Shop'

export const privateRoutes = [
	{
		path: '/admin',
		element: <Admin />
	},
	{
		path: '/basket',
		element: <Basket />
	}
]

export const publicRoutes = [
	{
		path: '/',
		element: <Shop />
	},
	{
		path: '/login',
		element: <Auth />
	},
	{
		path: '/registration',
		element: <Auth />
	},
	{
		path: '/device/:id',
		element: <Device />
	}
]