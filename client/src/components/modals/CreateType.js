import { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { createType } from '../../http/device'

const CreateType = ({ show, onHide }) => {
	const [value, setValue] = useState('')

	const addType = () => {
		createType({ name: value }).then((data) => {
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
					Create type
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control
						placeholder='Enter the name of type...'
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='outline-danger' onClick={onHide}>Close</Button>
				<Button variant='outline-success' onClick={addType}>Create</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default CreateType
