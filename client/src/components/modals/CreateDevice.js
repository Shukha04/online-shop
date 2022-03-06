import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useState } from 'react'
import { Button, Dropdown, Form, Modal, Table } from 'react-bootstrap'
import { createDevice, getBrands, getTypes } from '../../http/device'
import { Context } from '../../index'

const CreateDevice = observer(({ show, onHide }) => {
	const { device } = useContext(Context)
	const [name, setName] = useState('')
	const [price, setPrice] = useState(0)
	const [file, setFile] = useState(null)
	const [options, setOptions] = useState([])

	useEffect(() => {
		getTypes().then((data) => device.setTypes(data))
		getBrands().then((data) => device.setBrands(data))
	}, [])

	const addOption = () => {
		setOptions([...options, { title: '', description: '', number: Date.now() }])
	}

	const removeOption = (number) => {
		setOptions(options.filter((option) => option.number !== number))
	}

	const changeOption = (key, value, number) => {
		setOptions(options.map((o) => o.number === number ? { ...o, [key]: value } : o))
	}

	const selectFile = (e) => {
		setFile(e.target.files[0])
	}

	const addDevice = () => {
		const formData = new FormData()
		formData.append('name', name)
		formData.append('price', `${price}`)
		formData.append('img', file)
		formData.append('brandId', device.selectedBrand.id)
		formData.append('typeId', device.selectedType.id)
		formData.append('info', JSON.stringify(options))
		createDevice(formData).then((data) => onHide())
	}

	return (
		<Modal
			show={show}
			onHide={onHide}
			size='lg'
			centered
			scrollable
		>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					Add device
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Dropdown className='mt-2'>
						<Dropdown.Toggle>{device.selectedType.name || 'Select the type'}</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.types.map((type) =>
								<Dropdown.Item
									key={type.id}
									onClick={() => device.setSelectedType(type)}
								>
									{type.name}
								</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className='mt-2'>
						<Dropdown.Toggle>{device.selectedBrand.name || 'Select the brand'}</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.brands.map((brand) =>
								<Dropdown.Item
									key={brand.id}
									onClick={() => device.setSelectedBrand(brand)}
								>
									{brand.name}
								</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>
					<Form.Control
						className='mt-3'
						placeholder='Enter the name of device...'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Form.Control
						className='mt-3'
						placeholder='Enter the price of device...'
						type='number'
						value={price}
						onChange={(e) => setPrice(Number(e.target.value))}
					/>
					<Form.Control
						className='mt-3'
						placeholder='Enter the image of device...'
						type='file'
						onChange={selectFile}
					/>
					<hr />
					<Button
						variant='outline-dark'
						onClick={addOption}
					>
						Add new option
					</Button>

					<Table striped bordered>
						<tbody>
						{options.map((option) =>
							<tr key={option.number}>
								<td>
									<Form.Control
										value={option.title}
										onChange={(e) => changeOption('title', e.target.value, option.number)}
										placeholder='Enter the name of option...'
									/>
								</td>
								<td>
									<Form.Control
										value={option.description}
										onChange={(e) => changeOption('description', e.target.value, option.number)}
										placeholder='Enter the value of option...'
									/>
								</td>
								<td>
									<Button
										variant='outline-danger'
										onClick={() => removeOption(option.number)}
									>
										Delete
									</Button>
								</td>
							</tr>
						)}
						</tbody>
					</Table>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='outline-danger' onClick={onHide}>Close</Button>
				<Button variant='outline-success' onClick={addDevice}>Add</Button>
			</Modal.Footer>
		</Modal>
	)
})

export default CreateDevice
