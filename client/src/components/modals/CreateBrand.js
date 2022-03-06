import { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { createBrand } from '../../http/device'

const CreateBrand = ({ show, onHide }) => {
	const [value, setValue] = useState('')

	const addBrand = () => {
		createBrand({ name: value }).then((data) => {
			setValue('')
			onHide()
		})
	}

	return (
		<Modal
			show={show}
			onHide={onHide}
			size='lg'
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					Create brand
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control
						placeholder='Enter the name of brand...'
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='outline-danger' onClick={onHide}>Close</Button>
				<Button variant='outline-success' onClick={addBrand}>Create</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default CreateBrand
