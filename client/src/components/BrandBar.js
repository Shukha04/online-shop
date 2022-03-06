import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Context } from '../index'

const BrandBar = observer(() => {
	const { device } = useContext(Context)

	return (
		<ListGroup horizontal className='flex-wrap'>
			{device.brands.length > 0 && device.brands.map((brand) =>
				<ListGroup.Item
					key={brand.id}
					action
					active={brand.id === device.selectedBrand.id}
					onClick={() => device.setSelectedBrand(brand)}
					className='w-auto rounded border-0'
				>
					{brand.name}
				</ListGroup.Item>
			)}
		</ListGroup>
	)
})

export default BrandBar
