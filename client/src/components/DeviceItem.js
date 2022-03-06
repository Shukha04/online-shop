import { Card, Col, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import star from '../assets/star.png'

const DeviceItem = ({ device }) => {
	const navigate = useNavigate()

	return (
		<Col md={3} className='mt-3'>
			<Card border='light' role='button' onClick={() => navigate('/device/' + device.id)}>
				<Card.Img variant='top' src={process.env.REACT_APP_API_URL + device.img} />
				<Card.Body>
					<div className='d-flex justify-content-between align-items-center text-muted'>
						<Card.Subtitle>Samsung...</Card.Subtitle>
						<div className='d-flex align-items-center'>
							<div>{device.rating}</div>
							<Image src={star} alt='' />
						</div>
					</div>
					<Card.Title>{device.name}</Card.Title>
				</Card.Body>
			</Card>
		</Col>
	)
}

export default DeviceItem
