import { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import bigStar from '../assets/bigStar.png'
import { getDevice } from '../http/device'

const Device = () => {
	const [device, setDevice] = useState({ info: [] })
	const { id } = useParams()

	useEffect(() => {
		getDevice(id).then((data) => setDevice(data))
	}, [])

	return (
		<Container>
			<Row className='mt-3'>
				<Col md={4}>
					<Image src={process.env.REACT_APP_API_URL + device.img} width='100%' />
				</Col>
				<Col md={4}>
					<Row className='d-flex flex-column align-items-center'>
						<h2 className='text-center'>{device.name}</h2>
						<div
							className='d-flex align-items-center justify-content-center'
							style={{
								background: `url(${bigStar}) no-repeat center center`,
								backgroundSize: 'cover',
								width: '240px',
								height: '240px',
								fontSize: 64
							}}
						>
							{device.rating}
						</div>
					</Row>
				</Col>
				<Col md={4}>
					<Card
						className='d-flex f-className align-items-center justify-content-around h-100'
						style={{ fontSize: 32 }}
					>
						<h3>From: {device.price}$</h3>
						<Button variant='outline-dark'>Add to cart</Button>
					</Card>
				</Col>
			</Row>
			<Row className='mt-3'>
				<h1 className='px-0'>Options</h1>
				<Table striped bordered>
					<tbody>
					{device.info.map((option, index) =>
						<tr key={option.id}>
							<td>{index + 1}</td>
							<td>{option.title}</td>
							<td>{option.value}</td>
						</tr>
					)}
					</tbody>
				</Table>
			</Row>
		</Container>
	)
}

export default Device
