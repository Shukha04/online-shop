import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Context } from '../index'

const TypeBar = observer(() => {
	const { device } = useContext(Context)

	return (
		<ListGroup>
			{device.types.length > 0 && device.types.map((type) =>
				<ListGroup.Item
					key={type.id}
					action
					active={type.id === device.selectedType.id}
					onClick={() => device.setSelectedType(type)}
				>
					{type.name}
				</ListGroup.Item>
			)}
		</ListGroup>
	)
})

export default TypeBar
