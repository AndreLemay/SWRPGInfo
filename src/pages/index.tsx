import * as React from 'react'
import * as Data from '../../content/data.json'
import { Container, Row, Col } from 'react-bootstrap'
import CareerItem from '../components/CareerItem'

export default (_) => {
	return (
		<Container fluid style={{ marginTop: '10px' }} className="mainBody">
			<Row>
				{Data.careers.map((c, ind) => {
					return (
						<Col xs={4} style={{ marginBottom: '10px' }} key={ind}>
							<CareerItem {...c} />
						</Col>
					)
				})}
			</Row>
		</Container>
	)
}
