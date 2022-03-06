import { observer } from 'mobx-react-lite'
import { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BrandBar from '../components/BrandBar'
import DevicesList from '../components/DevicesList'
import Pages from '../components/Pages'
import TypeBar from '../components/TypeBar'
import { getBrands, getDevices, getTypes } from '../http/device'
import { Context } from '../index'

const Shop = observer(() => {
	const { device } = useContext(Context)

	useEffect(() => {
		getTypes().then((data) => device.setTypes(data))
		getBrands().then((data) => device.setBrands(data))
		getDevices(null, null, 1, 3).then((data) => {
			device.setDevices(data.rows)
			device.setTotalCount(data.count)
		})
	}, [])

	useEffect(() => {
		getDevices(device.selectedType.id, device.selectedBrand.id, device.page, device.limit).then((data) => {
			device.setDevices(data.rows)
			device.setTotalCount(data.count)
		})
	}, [device.page, device.selectedType, device.selectedBrand])

	return (
		<Container>
			<Row className='mt-2'>
				<Col md={3}>
					<TypeBar />
				</Col>
				<Col md={9}>
					<BrandBar />
					<DevicesList />
					<Pages />
				</Col>
			</Row>
		</Container>
	)
})

export default Shop
