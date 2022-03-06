import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { Context } from '../index'
import DeviceItem from './DeviceItem'

const DevicesList = observer(() => {
	const { device } = useContext(Context)

	return (
		<Row>
			{device.devices.length > 0 && device.devices.map((d) =>
				<DeviceItem key={d.id} device={d} />
			)}
		</Row>
	)
})

export default DevicesList
